const styles = {
    btn: {
        display: "inline-block",
        width: 150,
        padding: "8px 0",
        borderRadius: 5,
        textDecoration: "none",
        textAlign: "center",
        background: "deeppink",
        color: "white",
    }
}

function Button() {
    return <a href="#" style={styles.btn}>
        Link Button
    </a>
}