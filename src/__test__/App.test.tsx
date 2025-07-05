import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('App', () => {
    it('renders Layout component with content', () => {
        render(<App />)
        expect(screen.getByText('Hello world!!!!')).toBeInTheDocument()
    })
})
