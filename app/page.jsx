import Feed from '@components/Feed'

 const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center"> 
          Short posts with AI
        </span>
      </h1>
      <p className="desc text-center">
          ShortPost ia an open-source AI tool for current world to discover , 
          create and share creative short posts
      </p>

       <Feed />
      
    </section>
  )
}

export default Home;