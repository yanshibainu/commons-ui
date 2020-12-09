import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'rsuite'

const { Cell } = Table

const rename = (dataKey, value) => {
  switch (dataKey) {
    case 'Priority':
      return getFast(value)
    case 'FolderType':
      return getFolderType(value)
    case 'Secret':
      return getSecret(value)
    case 'ObjectType':
      return getObjectType(value)
  }
}

const getFolderType = (data) => {
  let fastName = ''
  switch (data) {
    case '0':
      fastName = '紙'
      break
    case '1':
      fastName = '電'
      break
  }

  return fastName
}

const getSecret = (data) => {
  let fastName = ''
  switch (data) {
    case '0':
      fastName = '普'
      break
    case '1':
      fastName = '密'
      break
    case '2':
      fastName = '機'
      break
    case '3':
      fastName = '極'
      break
  }

  return fastName
}

const getObjectType = (data) => {
  let fastName = ''
  switch (data) {
    case '1':
      fastName = '來'
      break
    case '2':
      fastName = '創'
      break
  }

  return fastName
}

const getFast = (data) => {
  let fastName = ''
  switch (data) {
    case '1':
      fastName = '普'
      break
    case '2':
      fastName = '速'
      break
    case '3':
      fastName = '最'
      break
  }

  return fastName
}
const ImageCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    <div
      style={{
        width: 20,
        height: 20,
        background: '#f5f5f5',
        borderRadius: 10,
        display: 'inline-block'
      }}
    >
      {rename(dataKey, rowData[dataKey])}
    </div>
  </Cell>
)

ImageCell.propTypes = {
  rowData: PropTypes.object,
  dataKey: PropTypes.string
}

export default ImageCell
