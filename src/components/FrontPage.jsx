function FrontPage() {
  return (
    <div>
      <p>
        This page works like a command prompt. Type in the page you&apos;re
        looking for and press &quot;Enter&quot; For a list of options type
        &quot;Home&quot; or &quot;Help&quot;
      </p>
      <p>Pages:</p>
      <ul>
        {/**Make these clickable by passing the state in to this component */}
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cat</li>
      </ul>
    </div>
  );
}

export default FrontPage;
