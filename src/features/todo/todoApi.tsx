import { rtkApi } from "../rtkquery";
import { TodoGet } from "./todoInterface";


export const todoAPI = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        search: builder.query<TodoGet[], { name: string }>({

            query: ({ name }) => {

                const search = name.length > 0 ? `?name=${name}` : ''

                return {
                    url: 'tarefa/' + search,
                    method: "GET",

                }
            }

        }),
        add: builder.mutation<

            TodoGet, { name: string , descrcao:string}
        >({
            query: ({ name,descrcao }) => {

                const data = {
                    nome: name,
                    descrcao: descrcao,
                    feito: true,
                    delete: false
                }
                return {
                    url: 'tarefa/',
                    method: "POST",
                    data,

                };
            },
        }),
        markAsDone: builder.mutation<

            TodoGet, { id: string }
        >({
            query: ({ id }) => {

                const data = {

                    feita: true,

                }
                return {
                    url: 'tarefa/' + id + "/",
                    method: "PATCH",
                    data,

                };
            },
        }),
        markAsPending: builder.mutation<

            TodoGet, { id: string }
        >({
            query: ({ id }) => {

                const data = {

                    feita: false,

                }
                return {
                    url: 'tarefa/' + id + "/",
                    method: "PATCH",
                    data,

                };
            },
        }),
        remove: builder.mutation<

            any, { id: string }
        >({
            query: ({ id }) => {


                return {
                    url: 'tarefa/' + id + "/",
                    method: "delete",


                };
            },
        }),
        login: builder.mutation<
            any,
            { username: string, password: string }
        >({
            query: ({ username, password }) => {
                const data = { username, password };
                return {
                    url: "/users/token/",
                    method: "POST",
                    data,

                };
            },
        }),





    }),
});