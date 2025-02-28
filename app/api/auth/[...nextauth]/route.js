import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

// console.log(
//     {clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET}
// )

const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callback: {
        async session({ session }){
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            session.user.id = sessionUser._id.toString();
        },
        async signIn({ profile }){
            try{
                await connectToDB();
                console.log(profile.name.replace(" ","").toLowerCase())
                //check for user
                const userExist = await User.findOne({
                    email:profile.email
                }) 
    
                //if not, create new user
                if(!userExist){
                    await User.create({
                        email:profile.email,
                        username:profile.name.replace(" ","").toLowerCase(),
                        image: profile.picture
                    })
                }
    
                return true;
    
            } catch(err) {
                console.log(err);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST };