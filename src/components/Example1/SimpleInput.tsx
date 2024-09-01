
export const SimpleInput = () => {

    return <div>
        <div>Example 1</div>
        <label htmlFor={"input"}>Username:</label>
        <input id={"input"} data-testid={"unique-username"} value={"Jane Doe"} onChange={() => {}}/>
    </div>
}