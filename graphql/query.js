// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export const allHomeQuery = gql`

    query HomeQuery {
        homepage {
            data{
                attributes{
                    title
                    subtitle
                }
            }
        }
    } 
`
