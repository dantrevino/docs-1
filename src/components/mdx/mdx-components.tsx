import React from 'react';
import {
  Pre,
  THead,
  SmartLink,
  TData,
  Table,
  InlineCode,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  BlockQuote,
  Br,
  Ul,
  P,
  Ol,
  Hr,
  Li,
  Sup,
} from '@components/mdx/components';
import { Img } from '@components/mdx/image';
import dynamic from 'next/dynamic';

const Code = dynamic(() => import('../code-block'));

export const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  inlineCode: InlineCode,
  code: Code,
  pre: Pre,
  br: Br,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: SmartLink,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
  img: Img,
  blockquote: BlockQuote,
  sup: Sup,
};
