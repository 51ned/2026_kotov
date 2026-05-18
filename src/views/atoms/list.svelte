<script lang='ts'>
  import cn from 'classnames'
  
  import type { WithAttrs, WithChildren, WithClass } from '$lib/shared/types/base.types'
  import s from './list.module.css'


  type ListProps = {
    orientation: 'horizontal' | 'vertical',
    variant: 'ordered' | 'unmarked' | 'unordered'
  } & WithAttrs<HTMLUListElement> & WithChildren & WithClass


  let {
    children,
    class: cls,
    orientation,
    variant,
    ...rest
  }: ListProps = $props()
</script>


<svelte:element
  class={cn(s.base, s[orientation], s[variant], cls)}
  this={variant === 'ordered' ? 'ol' : 'ul'}
  {...rest}
>
  {@render children()}
</svelte:element>
