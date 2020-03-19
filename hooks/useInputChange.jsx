import { useState } from "react"

const useInputChange = () => {
	const [input, setInput] = useState({
		checkbox: false
	})

	const handleInputChange = e => {
		if (e.currentTarget.name === "checkbox") {
			if (input.checkbox === false) {
				setInput({
					...input,
					[e.currentTarget.name]: true
				})
			} else {
				setInput({
					...input,
					[e.currentTarget.name]: false
				})
			}
		} else {
			setInput({
				...input,
				[e.currentTarget.name]: e.currentTarget.value
			})
		}
	}
	return [input, handleInputChange]
}

export default useInputChange
