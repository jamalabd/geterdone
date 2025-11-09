import { createContext } from 'react'

const UiContext = createContext();

const UiProvider = ({ children }) => {
    const { loading, setLoading } = useState(false);
    const { toast, setToast } = useState([]);

    return (
        <UiContext value={{ loading, setLoading, toast, setToast }}>
            {children}
        </UiContext>
    )
}

export { UiContext, UiProvider };