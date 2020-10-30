function Login() {
    return (
        <div className="header">
            <h2>Login Form</h2>
            <form className="fill">
                <label>Name
                <input type="text" name="nama" value="" />
                </label>
                <label>password
                <input type="password" name="password" value="" />
                </label>
            </form>
        </div>
    )

}
ReactDOM.render(<Login />, document.getElementById('form'))