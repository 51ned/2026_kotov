import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'


type TextSize = 'smallest' | 'smaller' | 'regular' | 'bigger' | 'biggest'

type WithChildren = {
  children: Snippet
}

type WithClass = {
  class?: string
}

type HtmlTag = keyof HTMLElementTagNameMap

type WithTag<T extends HtmlTag = HtmlTag> = {
  tag?: T
}

type WithUi = {
  ui?: boolean
}

type WithAttrs<T extends EventTarget = HTMLElement> = HTMLAttributes<T>

export type {
  TextSize,
  WithAttrs,
  WithChildren,
  WithClass,
  WithTag,
  WithUi
}
