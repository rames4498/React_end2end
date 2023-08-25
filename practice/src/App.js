const vanillaTiltOptions = { max: 25, perspective: 150 }

function Tilt({ children, setData, style }) {
    const divRef = useRef()

    useEffect(() => {
        const node = divRef.current
        VanillaTilt.init(node, vanillaTiltOptions)
        node.addEventListener("tiltChange", event => setData(event.detail))
        return () => node.vanillaTilt.destroy()
    }, [setData])

    return (
        <div ref={divRef} {...{ style }}>
            {children}
        </div>
    )
}

function App() {
    const [data, setData] = useState(null)

    return (
        <>
            <p>Touching the box will transform its perspective.</p>
            <div>
                <Tilt style={tiltStyle} {...{ setData }}>
                    <TiltDataDisplay {...{ data }} />
                </Tilt>
            </div>
        </>
    )
}

export default App;