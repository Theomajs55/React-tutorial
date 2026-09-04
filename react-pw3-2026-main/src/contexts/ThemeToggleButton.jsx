const {theme, toggleTheme} = useContext(ThemeContext);

turn (
    <button onClick={toggleTheme} className={theme}>
        Mudar o tema
    </button>
)