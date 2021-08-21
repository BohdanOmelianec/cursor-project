import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCategoryAction } from '../../redux/categoryReducer'
import TableRow from '../StyledComponents/TableRow'
import TableRowItem from '../StyledComponents/TableRowItem'
import TextContent from '../StyledComponents/TextContent'

export default function Category(props) {
	const dispatch = useDispatch()

	function removeActionHandler(id) {
		dispatch(removeCategoryAction(id))
	}

	return (
		<TableRow>
			<TableRowItem>
				<FontAwesomeIcon icon={props.icon} />
				<TextContent margin="10px">{props.name}</TextContent>
			</TableRowItem>
			<TableRowItem>{props.description}</TableRowItem>
			<TableRowItem>{props.date}</TableRowItem>
			<TableRowItem style={{ cursor: 'pointer' }}>
				<FontAwesomeIcon
					onClick={() => removeActionHandler(props.id)}
					icon={faTrashAlt}
				/>
			</TableRowItem>
		</TableRow>
	)
}
