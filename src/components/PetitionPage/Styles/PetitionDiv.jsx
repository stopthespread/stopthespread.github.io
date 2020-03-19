import styled from "styled-components"
import useInputChange from "../../../../hooks/useInputChange"

const Wrapper = styled.section`
	height: 60%;
	width: 50%;
	background: white;
	box-shadow: 0px 0px 5px 1px gray;
	display: flex;
	justify-content: center;
	flex-direction: column;
`

const TitleBar = styled.div`
	height: 15%;
	width: 100%;
	background: ${({ theme }) => theme.color.primary};
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
`

const Form = styled.form`
	height: 85%;
	padding: 10%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
`

const Input = styled.input`
	background: transparent;
	border: 0;
	outline: 0;
	border-bottom: 1px solid gray;
	font-size: 14px;
	color: #959595;
	padding: 8px 0;
	width: 100%;
`

const Label = styled.label`
	width: 100%;
	height: 10%;
	font-size: 24px;
	color: #959595;
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	position: relative;
`

const Span = styled.span`
	position: relative;
	padding-left: 10px;
	cursor: pointer;
	display: inline-block;
	height: 25px;
	line-height: 25px;
	font-size: 1rem;
`
const CheckBox = styled.input`
	height: 25px;
	width: 25px;
	border: 1px solid red;
	border-radius: 4px;
	outline: none;
	transition-duration: 0.3s;
	cursor: pointer;
`

const Submit = styled.button`
	height: 12%;
	width: 100%;
	background: ${({ theme }) => theme.color.primary};
	color: white;
	font-size: 24px;
`

const PetitionDiv = () => {
	const [input, handleInputChange] = useInputChange()
	console.log(input)
	return (
		<Wrapper>
			<TitleBar>Coronavirus Petition</TitleBar>

			<Form>
				<Input
					type='text'
					onChange={handleInputChange}
					placeholder='First Name'
					name='firstName'
				/>
				<Input
					type='text'
					onChange={handleInputChange}
					placeholder='Last Name'
					name='lastName'
				/>
				<Input
					type='email'
					onChange={handleInputChange}
					placeholder='Email'
					name='email'
				/>
				<Label>
					<CheckBox
						type='checkbox'
						name='checkbox'
						onChange={handleInputChange}
						value='false'
					/>
					<Span>Display my name and comment on this petition</Span>
				</Label>
				<Submit>Sign the Petition</Submit>
			</Form>
		</Wrapper>
	)
}

export default PetitionDiv
