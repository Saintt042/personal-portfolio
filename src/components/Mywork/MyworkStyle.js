import styled from 'styled-components';



export const Container = styled.section`
	padding: 40px 7% 20px 7%;
	h2 {
		text-align: center;
		font-size: clamp(1.5rem, 4vw, 2.8rem);
		margin-bottom: 1.5rem;
	}
	.grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	@media screen and (max-width: 815px) {
		padding: 20px 3%;
	}
	@media screen and (max-width: 575px) {
		.grid {
			justify-content: center;
		}
	}
`;