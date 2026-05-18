<script lang='ts'>
  import cn from 'classnames'

  import type { WithAttrs, WithChildren, WithClass } from '$lib/shared/types/base.types'
  import s from './link.module.css'


  type LinkProps = {
    external?: boolean,
    href: string,
    title?: string,
    variant: 'content' | 'nav'
  } & WithAttrs & WithChildren & WithClass


  let {
    children,
    class: cls,
    external,
    href,
    title,
    variant,
    ...rest
  }: LinkProps = $props()
</script>


<a
  class={cn(
    s.base,
    s[variant],
    cls
  )}
  href={href}
  rel={external ? 'noopener noreferrer' : undefined}
  target={external ? '_blank' : undefined}
  title={title}
  {...rest}
>
  {@render children()}
</a>
