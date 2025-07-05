import '@ant-design/v5-patch-for-react-19'
import { ConvexAuthProvider } from '@convex-dev/auth/react'
import * as Sentry from '@sentry/react'
import { ConvexReactClient } from 'convex/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

Sentry.init({
    dsn: 'https://ecaf81452b9bc5d21b337c37068b79c3@o4509544190902272.ingest.us.sentry.io/4509616333455360',
    enabled: import.meta.env.VITE_ENV === 'production',
    sendDefaultPii: true
})

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConvexAuthProvider client={convex}>
            <App />
        </ConvexAuthProvider>
    </StrictMode>
)
