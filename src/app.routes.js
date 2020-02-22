const express = require('express')
const router = express.Router()
const {response} = require('@barrydevp/common')

router.get('/', (req, res) => res.send(`Hi! I'm ${process.env.PROJECT_NAME}`))
router.get('/ping', (req, res) => res.send(`${process.env.PROJECT_NAME}:pong`))

const heartbeatCtl = require('./controllers/heartbeat')
router.get('/heartbeat/ping', heartbeatCtl.ping)

/**
 * Sites.
 */
const siteCtrl = require('./controllers/site')
router.get('/sites', siteCtrl.getListSite)
router.get('/sites/:_id', siteCtrl.getSiteById)
router.post('/sites', siteCtrl.insertSite)
router.put('/sites/:_id', siteCtrl.updateSite)

/**
 * Courses.
 */
const courseCtrl = require('./controllers/course')
router.get('/courses', courseCtrl.getListCourse)
router.get('/courses/:_id', courseCtrl.getCourseById)
router.post('/courses', courseCtrl.insertCourse)
router.put('/courses/:_id', courseCtrl.updateCourse)

/**
 * Quizs.
 */
const quizCtrl = require('./controllers/quiz')
router.get('/quizs', quizCtrl.getListQuiz)
router.get('/quizs/:_id', quizCtrl.getQuizById)
router.post('/quizs', quizCtrl.insertQuiz)
router.put('/quizs/:_id', quizCtrl.updateQuiz)

/**
 * Questions.
 */
const questionCtrl = require('./controllers/question')
router.get('/questions', questionCtrl.getListQuestion)
router.get('/questions/:_id', questionCtrl.getQuestionById)
router.post('/questions', questionCtrl.insertQuestion)
router.put('/questions/:_id', questionCtrl.updateQuestionById)
router.put('/questions', questionCtrl.updateQuestionByQuery)
router.post('/questions/bulk-update', questionCtrl.bulkUpdateQuestion)

/**
 * 404 page.
 */
router.get('*', response.send404)

/**
 * Exports.
 */
module.exports = router
