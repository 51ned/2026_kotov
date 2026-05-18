<script lang='ts'>
  import '$styles/index.css'
  import s from './layout.module.css'

	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>


<svelte:head>
	<link rel='icon' href={favicon} />
</svelte:head>


<div class={s.layout}>
  <main class={s.main}>
    {@render children()}
  </main>

  <aside class={s.leftbar}>
    <header>
      <span>LOGO</span>
    </header>

    <nav class={s.nav}>
      <span>NAV</span>
    </nav>
  </aside>

  <aside class={s.topbar}>
    <span>RSS Feed</span>
    <span>Search</span>
  </aside>

  <footer class={s.footer}>
    <span>FOOTER</span>
  </footer>
</div>
