/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'
import FLockLogo from '@/public/FLockLogo.svg'
import chatFlock from '@/app/utils/flock-api'
import { error } from 'console'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub API URL to enable frame verification.
  // hubApiUrl: 'https://api.hub.wevm.dev',
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <FLockLogo
          style={{
            height: 200,
            width: 200,
          }}
        />

        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 10,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          FLock.io RAG chat playground
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 48,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Lets chat about Ecosystem!
        </div>
      </div>
    ),
    intents: [
      <Button action='/chat' value="Lets Start">Lets Start</Button>,
      <Button.Link href="https://flock.io">FLock</Button.Link>,
    ],
  })
})

app.frame('/chat', (c) => {
  const { buttonValue, inputText, status } = c

  return c.res({
    action: '/chat',
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <FLockLogo
          style={{
            height: 200,
            width: 200,
          }}
        />

        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 10,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          FLock.io RAG chat playground
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 48,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Lets chat about Ecosystem!
        </div>
      </div>
    ),
    intents: [
      <TextInput placeholder="Enter your question..." />,
      <Button action='/submit' value="cls3bm1yf00017drv1rv2p137"> BTCBot </Button>,
      <Button action='/submit' value="cls4frht2000njy824nn3c7g5"> ETHBot </Button>,
      <Button action='/submit' value="cls4fv9ev0019jy82egcigw4a"> ScrollBot </Button>,
      <Button action='/' value="Go Back"> Go Back </Button>,
    ],
  })
})


app.frame('/submit', async (c) => {
  const { buttonValue, inputText, status } = c
  const inputValue = inputText
  const button = buttonValue
  let chatResult


  // try {
  //   // @ts-ignore
  //   chatResult = await chatFlock(inputValue, button)
  // } catch (error) {
  //   chatResult = error
  // }


  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <FLockLogo
          style={{
            height: 200,
            width: 200,
          }}
        />

        <div
          style={{
            color: 'white',
            fontSize: 30,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            && `This is the answer for your question:`}
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 48,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 10,
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            && `${inputText}`}
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 24,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 20,
            width: '70%',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            && `${chatResult?.answer}`}
        </div>
      </div>
    ),
    intents: [
      <Button action='/' value="Go Back"> Go Back </Button>,
      <Button.Link href="https://flock.io">FLock</Button.Link>,
      // <Button.Mint mint=""> Ask Another Question </Button.Mint>,
    ],
  })
})

export const GET = handle(app)
export const POST = handle(app)
