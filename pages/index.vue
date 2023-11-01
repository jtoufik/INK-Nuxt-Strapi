<template>
  <main>
    <section class="header-main">
      <div class="hero-title">
        <h1 class="hero-heading" aria-label="Where the real legends begin">
          <div class="hero-title-where slide-first" aria-hidden="true">
            <span>W</span>
            <span>H</span>
            <span>E</span>
            <span>R</span>
            <span>E</span>
          </div>
          <div class="hero-title-the-real slide-first" aria-hidden="true">
            <div>
              <span>T</span>
              <span>H</span>
              <span>E</span>
            </div>
            <div>
              <span>R</span>
              <span>E</span>
              <span>A</span>
              <span>L</span>
            </div>
          </div>
          <div class="hero-title-legends" aria-hidden="true">
            <span>L</span>
            <span>E</span>
            <span>G</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
            <span>S</span>
          </div>
          <div class="hero-title-begin slide-second" aria-hidden="true">
            <span>B</span>
            <span>E</span>
            <span>G</span>
            <span>I</span>
            <span>N.</span>
          </div>
        </h1>
      </div>
    </section>
    <div class="inside-container">
      <!-- <h1> {{ homepage.data.attributes.title }}</h1> -->
      <p> {{ homepage.data.attributes.subtitle }}</p>
    </div>
  </main>
</template>

<script>

import { allHomeQuery } from '../graphql/query'

export default {
  data () {
    return {
      homepage: []
    }
  },
  apollo: {
    homepage: {
      prefetch: true,
      query: allHomeQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}

</script>

<style>

  main{
        padding: 1em 0;
        min-height: 75vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

  .header-main {
        display: flex;
        width: 100%;
        margin: 2em;
        padding: 4em;
    }

    .hero-title {
        display: flex;
        flex-direction: column;
        width: 40%;
        transform: rotate(-2deg);
    }

    .hero-heading {
        font-weight: normal;
    }

    .hero-title span {
        font-size: clamp(36px, 9vw, 128px);
        font-family: 'Kirang Haerang';
        text-transform: uppercase;
        display: flex;
        height: fit-content;
        line-height: 62%;
    }

    .hero-title-where,
    .hero-title-the-real,
    .hero-title-the-real div,
    .hero-title-legends,
    .hero-title-begin {
        display: flex;
        align-items: flex-end;
    }

    .hero-title-the-real {
        width: fit-content;
        margin: 0 0 0 auto;
        gap: 2vw;
    }

    .hero-title-where span:nth-of-type(1),
    .hero-title-where span:nth-of-type(2),
    .hero-title-the-real>div:nth-of-type(2) span:nth-of-type(2) {
        font-size: clamp(2.2rem, 11.5vw, 168px);
    }

    .hero-title-legends {
        color: var(--candelLight);
    }

    .hero-title-legends span {
        font-size: clamp(44px, 10vw, 144px);
    }

    .hero-title-legends span:nth-of-type(1),
    .hero-title-legends span:nth-of-type(7) {
        font-size: clamp(40px, 9vw, 128px);
    }

    .hero-title-legends span:nth-of-type(4) {
        font-size: clamp(33px, 7.2vw, 104px);
    }

    .hero-title-begin {
        width: fit-content;
        margin: 0 0 0 auto;
    }

    .hero-title-begin span:nth-of-type(2),
    .hero-title-begin span:nth-of-type(3) {
        font-size: clamp(36px, 7.8vw, 112px);
    }

  p{
    text-align: center;
  }

</style>
