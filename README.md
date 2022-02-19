# tl-dv-task

## Getting started

1. Prerequisites:
   - [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
     (Docker Desktop for Windows comes with both)

2. Copy file `.env.example` to `.env` and adjust it's content
3. add `tldv.localhost` to your host file
4. Run `docker compose up` (Make sure to run from the root directory)
5. Seeding video collection
   1. `docker compose exec app sh` CLI and login to app container
   2. Seed the data using `npm run seed`
   3. Wait till the `Seeded` message is visible
6. Voila! Grab yourself a coffee!

   
## API Documentation

Documentation: https://documenter.getpostman.com/view/19012531/UVkiRHnL

## Improvments
1. Nginx ENV variables can be further improved
2. Basically every bonus section ;)
   1. Authorization with passport
   2. Unit and or API testing using mocha chai
3. Pagination can be further improved with meta information
4. Http Codes and Exception can be a class or service.
5. Responses can be formatted universally
6. Validations on each method can be refactored
7. Filters can be improved a lot
8. Application frontend could have been built
9. 
