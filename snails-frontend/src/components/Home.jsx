const Home = () => {

  return (
    <div className="home">
      <div>
        <img
          style={{ display: 'block', maxWidth: '100%' }}
          src="https://i.pinimg.com/originals/df/c3/68/dfc368c7afdacd4135a1c23e2455e176.png"
          alt="logo"
        />
      </div>
      <div>
        <h1>Welcome to the Snail Trail!</h1>
        <h2>
          The Rules
        </h2>
        <ul>
          <li>posts regarding the purchase or sale of any kind are prohibited</li>
          <li>Pictures or articles not pertaining to snails will be removed</li>
          <li>Refrain from the use of profanity</li>
          <li>If posting a dead or squished snail, please provide a warning</li>
          <li>Drawings of snails are permitted!</li>
          <li>Fictional Snail are permitted!
</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
