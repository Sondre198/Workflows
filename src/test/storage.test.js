import {save} from "../js/storage/save"
import {load} from "../js/storage/load"

test("can load and save", () =>{
    // Mocking local storage for test
    global.localStorage = {
        values : {},
        setItem(k,v) { global.localStorage.values[k]=v },
        getItem(k) { return global.localStorage.values[k] }
    }
    const value="abc123"

    save("keep", value)

    const loaded=load("keep")

    expect(loaded).toBe(value)
})