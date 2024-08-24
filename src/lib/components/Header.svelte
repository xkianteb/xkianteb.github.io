<script lang="ts">
  import { page } from "$app/stores";

  const links = [
    { name: "home", href: "/" },
    { name: "publications", href: "/publications" },
    { name: "teaching", href: "/teaching" },
    { name: "advisees", href: "/advisees" },
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

<div class="layout-md content grid grid-cols-2 gap-5 border-b-2 border-black pt-2 pb-2 object-scale-down">
  <div class="">
  <img class="object-scale-down" src="/assets/images/kiante.jpg" alt="">
  </div>

  <div class="grid-rows-4  md:space-y-2 place-content-center">
     <div class="mb-5">
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
     <div>(He/Him/His)</div>
     <div class="font-medium">Assistant Professor, Harvard University (SEAS)</div>
     <div class="mb-5">150 Western Av. Room 2-332, Allston MA 02134</div>
  </div>
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
    @apply flex items-start text-neutral-500 justify-center space-x-6 text-lg py-0.5 block layout-md mb-12;
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
