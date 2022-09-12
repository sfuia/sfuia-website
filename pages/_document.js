
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/sfuia-wayang.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}