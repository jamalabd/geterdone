import { createContext } from 'react'

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
    const { ui, setUi } = useState();
    return (
        <UiContext value={{ ui, setUi }}>
            {children}
        </UiContext>
    )
}

export { UiContext };