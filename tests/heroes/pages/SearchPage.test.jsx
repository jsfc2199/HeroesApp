/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from './../../../src/heroes/pages/SearchPage';

const mockedUseNavigat = jest.fn()

jest.mock('react-router-dom' , () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigat
}));

describe('Pruebas en el search page', () => {

    beforeEach(() => jest.clearAllMocks());

  test('debe de mostrarse correctamente con valores por defectos', () => {
    const {container} = render(
        <MemoryRouter>
            <SearchPage/>
        </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  })

  test('debe de mostrarse a bataman y el input con el valor del query string', () => {
    render(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchPage/>
        </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    
    const img = screen.getByRole('img')
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

    const alert = screen.getByLabelText('alert-danger')
    expect(alert.style.display).toBe('none')
  })

  test('debe de mostrar un error si no se encuentra el heroe', () => {
    render(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <SearchPage/>
        </MemoryRouter>
    )

    screen.debug()
    const alert = screen.getByLabelText('alert-danger')
    expect(alert.style.display).toBe('')
  })

  test('debe de llamar el navigate a la pantalla nueva ', () => {
    render(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <SearchPage/>
        </MemoryRouter>
    )

    //llenamos el input de informacion
    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}})

    //hacemos el submit del formulario que nos debe de llevar a la otra pagina
    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(mockedUseNavigat).toHaveBeenCalledWith('?q=superman')
  })
  
  
  
})
