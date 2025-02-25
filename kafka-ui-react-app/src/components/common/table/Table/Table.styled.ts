import styled from 'styled-components';

interface Props {
  isFullwidth?: boolean;
}

export const Table = styled.table<Props>`
  width: ${(props) => (props.isFullwidth ? '100%' : 'auto')};

  & td {
    border-top: 1px #f1f2f3 solid;
    font-size: 14px;
    font-weight: 400;
    padding: 8px 8px 8px 24px;
    color: ${({ theme }) => theme.table.td.color.normal};
    vertical-align: middle;
  }

  & tbody > tr {
    &:hover {
      background-color: ${({ theme }) => theme.table.tr.backgroundColor.hover};
    }
  }
`;
