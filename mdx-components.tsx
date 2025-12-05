import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import { MdxCover } from '@/components/mdx-cover'
import { ZoomImage } from '@/components/zoom-image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: MdxCover,
    img: ZoomImage as any,
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
