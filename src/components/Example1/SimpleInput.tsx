
export const SimpleInput = () => {

    return <div>
        <div>Example 1</div>
        <label htmlFor={"input"}>Username:</label>
        <input role={"myinput"} id={"input"} data-testid={"unique-username"} value={"Jane Doe"} onChange={() => {}}/>
    </div>
}