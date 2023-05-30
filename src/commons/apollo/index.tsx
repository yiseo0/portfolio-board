import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

interface IApolloSettingProps {
   children: JSX.Element[]
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
   const client = new ApolloClient({
      uri: "https://backendonline.codebootcamp.co.kr/graphql",
      cache: new InMemoryCache()
   })
   return (
      <ApolloProvider client={client}>
         {props.children}
      </ApolloProvider>
   );
}