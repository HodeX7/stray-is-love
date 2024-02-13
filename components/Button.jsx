export default ({ text }) => {
    return (
        <button style={{

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            paddingInline: "4rem",
            paddingBlock: "1rem",
            borderRadius: "5rem",

            border: "2px solid #0b0b0b"
        }}>
            {text}
        </button>
    )
}