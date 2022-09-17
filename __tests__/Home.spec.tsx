import { expect, test } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import Home from '../pages'

test('home', () => {
  render(<Home />)
  const main = within(screen.getByRole('main'))

  const buttonsElements = main.getAllByRole("button") as HTMLButtonElement[]
  const closeButton = buttonsElements[0]
  const openButton = buttonsElements[1]
  
  expect(main.getByRole('heading', { level: 1, name: /amazing/i })).toBeDefined()
  expect(closeButton).toBeDefined()
  expect(openButton).toBeDefined()

  fireEvent.click(openButton)

  expect(screen.getByRole("main").className.includes("show-nav")).toBeTruthy()

  fireEvent.click(closeButton)

  expect(screen.getByRole("main").className.includes("show-nav")).toBeFalsy()
})