// src/__test__/main.test.tsx
import * as ReactIs from 'react-is'
import { beforeEach, describe, expect, it, vi } from 'vitest'

// Define renderMock globally
const renderMock = vi.fn()

vi.mock('react-dom/client', () => ({
    createRoot: () => ({
        render: renderMock
    })
}))

vi.mock('../App.tsx', () => ({
    default: function MockedApp() {
        return 'MockedApp'
    }
}))

describe('index.tsx', () => {
    beforeEach(() => {
        // Setup DOM root
        document.body.innerHTML = ''
        const rootDiv = document.createElement('div')
        rootDiv.id = 'root'
        document.body.appendChild(rootDiv)

        renderMock.mockReset()
    })

    it('renders the App component inside StrictMode', async () => {
        await import('../main.tsx') // Trigger actual rendering

        expect(renderMock).toHaveBeenCalledTimes(1)

        const renderedElement = renderMock.mock.calls[0][0]

        // Validate top-level is StrictMode
        expect(ReactIs.isStrictMode(renderedElement)).toBe(true)

        // Validate its children contains MockedApp
        const child = renderedElement.props.children
        expect(child.key).toBe(null)
    })
})
