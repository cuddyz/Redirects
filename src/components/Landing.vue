<template>
  <article>
    <h1>Cuddy.dev - Redirects Home Page</h1>
    <section>
      <div>
        <h3>Personal Website</h3>
        <a target="_blank" href="https://zack-cuddy.com">https://cuddy.dev/me</a>
      </div>
      <div>
        <h3>Wedding Website</h3>
        <a target="_blank" href="https://teach-me-how-to-cuddy.com">https://cuddy.dev/wedding</a>
      </div>
      <div>
        <h3>Oakville Butcher Block</h3>
        <a target="_blank" href="https://oakvillebutcherblock.com">https://cuddy.dev/butcher</a>
      </div>
      <div>
        <h3>Trey's Training</h3>
        <a target="_blank" href="https://treythetrainer.com">https://cuddy.dev/trey</a>
      </div>
      <div>
        <h3>Restaurant Finder</h3>
        <a target="_blank" href="https://gotta-eat.net">https://cuddy.dev/eat</a>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style scoped>
  article {
    margin: 2rem;
  }

  h1 {
    font-size: 2em;
  }

  section {
    padding: 2rem;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(27,43,52,.12), 0 2px 4px 0 rgba(27,43,52,.08);
    border: 1px solid #F0F0F0;
  }

  div {
    padding: 1rem 0;
  }

  h3 {
    font-weight: normal;
    font-size: 1.4em;
  }

a {
  color: #2FAAE4;
  text-decoration: none;
  font-size: 1.2em;
}

a:hover {
  color: #49C4FE;
}
</style>
