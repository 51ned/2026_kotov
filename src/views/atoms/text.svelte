<script lang='ts'>
  import cn from 'classnames'

  import type { TextSize, WithAttrs, WithChildren, WithClass, WithTag, WithUi } from '$lib/shared/types/base.types'
  import s from '$lib/shared/styles/typography.module.css'
  

  type TextProps = {       
    size?: TextSize
  } & WithAttrs & WithChildren & WithClass & WithTag & WithUi


  let {
    children,
    class: cls,
    size = 'regular',
    tag = 'p',
    ui = false,
    ...rest
  }: TextProps = $props()
</script>


<svelte:element
  class={cn(
    s.text,
    s[`size-${size}`],
    size && s.hasSize,
    ui && s.ui,
    cls
  )}
  this={tag}
  {...rest}
>
  {@render children()}
</svelte:element>