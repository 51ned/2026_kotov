<script lang='ts'>
  import '$styles/index.css'
  import s from './layout.module.css'

  import logo from '$lib/assets/logo.svg'
	import favicon from '$lib/assets/favicon.svg'

	let { children } = $props()
</script>


{#snippet footerContent()}
  <div class={s.footerInner}>
    FOOTER
  </div>
{/snippet}


<svelte:head>
	<link rel='icon' href={favicon} />
</svelte:head>


<div class={s.layout}>
  <main class={s.main}>
    {@render children()}
  </main>

  <aside class={s.leftbar}>
    <header class={s.header}>
      <a class={s.logo} href='/' aria-label='Котов — на главную'>
        <img src={logo} alt='Котов' />
      </a>
    </header>

    <nav class={s.nav}>
      <span>NAV</span>
    </nav>

    <footer class={`${s.footer} ${s.desktopFooter}`}>
      {@render footerContent()}
    </footer>
  </aside>

  <aside class={s.topbar}>
    <span>RSS Feed</span>
    <span>Search</span>
  </aside>
  
  <footer class={`${s.footer} ${s.mobileFooter}`}>
    {@render footerContent()}
  </footer>
</div>
