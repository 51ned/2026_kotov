<script lang='ts'>
  import cn from 'classnames'

  import type { TextSize, WithAttrs, WithChildren, WithClass, WithUi } from '$lib/shared/types/base.types'
  import s from '$lib/shared/styles/typography.module.css'


  type HeadingProps = {
    lvl: 1 | 2 | 3,
    size?: TextSize
  } & WithAttrs & WithChildren & WithClass & WithUi


  let {
    children,
    class: cls,
    lvl,
    size,
    ui = false,
    ...rest
  }: HeadingProps = $props()
</script>


<svelte:element
  class={cn(
    cls,
    s.heading,
    s[`h${lvl}`],
    size && s[`size-${size}`],
    size && s.hasSize,
    ui && s.ui,
  )}
  this={`h${lvl}`}
  {...rest}
>
	{@render children()}
</svelte:element>
