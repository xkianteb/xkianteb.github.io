<script lang="ts">
  import { page } from "$app/stores";

  /**
  * Shuffle the names and put [] around certain letters for affirmation;
  * - Regain - R (Group), E (Publications), G (Group), A (Talks), I (Bio), N (Teaching)
  * - Optics - O (Home), P (Publications), T (Talks), I (Bio), C (Publications), S (Talks)
  * - Tribal - T (Talks), R (Group), I (Bio), B (Bio), A (Talks), L (Teaching)
  * - Social - S (Talks), O (Home), C (Publications), I (Bio), A (Talks), L (Teaching)
  */

  const links = [
    { name: "home", href: "/" },
    { name: "publications", href: "/publications" },
    { name: "teaching", href: "/teaching" },
    { name: "group", href: "/group" },
    { name: "bio", href: "/bio" },
    { name: "talks", href: "/talks" },
  ];

  let pageTitle: string | null = null;
  $: {
    const link = links.find(({ href }) => href === $page.url.pathname);
    if (link) {
      pageTitle = link.name.charAt(0).toUpperCase() + link.name.slice(1);
    } else {
      pageTitle = null;
    }
  }
</script>

<header
  class=""
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>

  <!--
  zoom in/out
  https://pagedone.io/docs/hover-effect
  -->
  <div class="layout-md content grid grid-cols-2 gap-5 pt-2 pb-2 object-scale-down">
    <div class="">
    <img class="object-scale-down rounded-t-lg" src="/assets/images/kiante.jpg" alt="">
  </div>
  
  <div class="grid-rows-4  md:space-y-0 place-content-center">
    <div class="">
      <h1 class="font-bold text-black text-2xl">
        <a href="/">Kiant&eacute; Brantley</a>
          {#if pageTitle}
            {#if pageTitle != 'Home'}
              <span class="page-title">
                <span class="text-neutral-400">—</span>
                {pageTitle}
              </span>
            {/if}
          {/if}
        </h1>
      </div>
      <div class="anormal-font">(He/Him/His) </div>
      <div class="anormal-font">
        <br> <span class="anormal-font-bold text-black">Assistant Professor 
        <br> <a href="https://kempnerinstitute.harvard.edu" class="alink">Kempner Institute</a> and <a href="https://seas.harvard.edu" class="alink">School of Engineering and Applied Sciences (SEAS) Harvard University</a></span>
        <br> 150 Western Av., Room 6.141, Allston MA 02134
        <br><br> 
        <a href="mailto:kdbrantley@g.harvard.edu" class="alink">[kdbrantley@g.harvard.edu]</a>
        <a class="alink" href="/assets/pdf/kiante_brantley.pdf">[CV]</a>
      </div>
    </div>
  </div>

  <div class="layout-md">
      <div class="flex-grow border-b-2 border-black"></div>
  </div>
  
  <nav>
    {#each links as link (link)}
      <a
        href={link.href}
        class="hover:text-black transition-colors"
        class:text-black={$page.url.pathname === link.href}
      >
        {link.name}
      </a>
    {/each}
  </nav>

</header>

<style lang="postcss">
  nav {
    @apply flex items-start text-neutral-500 justify-center space-x-6 text-lg py-0.5 block layout-md mb-8;
  }

  .page-title {
    @apply font-light;
  }

  @media (max-width: 480px) {
    .page-title {
      @apply block text-xl;
    }

    .page-title :first-child {
      @apply hidden;
    }
  }

  @media (max-width: 420px) {
    nav {
      @apply flex-col items-end space-x-0;
    }
  }
</style>
