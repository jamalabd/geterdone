import { createContext } from 'react'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { user, setUser } = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.pars(storedUser) : {};
    });

    useEffect(() => {
        if (user) localStorage.setItem('user', JSON.stringify(user));
        else localStorage.removeItem('user');
    }, [user])


    return (
        <AuthContext value={{ user, setUser }}>
            {children}
        </AuthContext>
    )
}

export { AuthContext, AuthProvider };