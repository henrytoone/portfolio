import { Router } from 'itty-router'
import { createCors } from 'itty-cors'

const { preflight, corsify } = createCors({
    origins: ['*'],
    methods: ['GET', 'PATCH'],
})

// Create a new router
const baseRouter = Router()
const router = Router({ base: '/api' })


// Interactions with the Cloudflare KV
const getData = async (key) => {
    return await SAMPLE_API.get(key)
}
const setData = async (key, data) => {
    if (typeof data == 'object') {
        data = JSON.stringify(data)
    }
    if (typeof data != 'string') {
        throw 'Data must be string or JSON'
    }
    await SAMPLE_API.put(key, data)
}


router.all('*', preflight) // handle CORS preflight/OPTIONS requests

// Simple get request
router.get('/', async () => {
    return new Response(JSON.stringify(await getData('foo')), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
})

// Handle request with JSON body
router.patch('/', async (req) => {
    const body = await req.json();
    await setData('foo', body.someData)

    return new Response(JSON.stringify({ message: 'success' }), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
})

// Request with parameter variables
router.get(`/:count`, async (req) => {
    console.log(`The count is ${parseInt(req.params.count)}`)

    return new Response(`You sent ${req.params.count}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
})

// Request handled with seperate function
const someFunc = async () => {
    return new Response('I am a custom function')
}
router.get('/foo', someFunc)

// Handle all other requests with a 404
router.all('*', () => new Response('404, not found!', { status: 404 }))

// Redirect all /api requests to the other router
baseRouter.all('/api/*', router.handle)

// Handle all other requests with a 404
baseRouter.all(
    '*',
    () =>
        new Response('404, not found! (did you mean to request /api ?)', {
            status: 404,
        })
)

// Attach fetch event listener to the router
addEventListener('fetch', (e) => {
    // e.respondWith(router.handle(e.request).then(corsify))
    e.respondWith(baseRouter.handle(e.request))
})

// Attach cron event listener to function
addEventListener('scheduled', (event) => {
    event.waitUntil(scheduled_function())
})

async function scheduled_function() {
    // Do some stuff
    return new Response('I am a scheduled function')
}
