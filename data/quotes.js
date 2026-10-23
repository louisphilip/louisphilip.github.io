// Curated from LP's private quote notes. Fields:
//   text        the quote itself
//   sourceType  "book" | "person" | "unknown" — where the quote came from
//   author      who said or wrote it (omit when unknown)
//   work        the book or work it appears in
//   reference   a verse or chapter within the work, e.g. "Romans 12:12"
//   via         where it was found when that isn't the original source
//   attributed  true when the author is popular attribution rather than verified
//   themes      keys from quoteThemes; the first theme places the star in the constellation

export const quoteThemes = [
    { key: "growth", label: "Growth" },
    { key: "discipline", label: "Discipline & Habits" },
    { key: "mindset", label: "Mindset" },
    { key: "courage", label: "Courage" },
    { key: "purpose", label: "Purpose & Service" },
    { key: "relationships", label: "Relationships" },
    { key: "leadership", label: "Leadership" },
    { key: "faith", label: "Faith" },
    { key: "creativity", label: "Creativity" },
];

export const quoteSourceTypes = [
    { key: "book", label: "Books", icon: "📖" },
    { key: "person", label: "People", icon: "😀" },
    { key: "unknown", label: "Unknown", icon: "🤷🏻‍♂️" },
];

const COVEY = "Stephen R. Covey";
const SEVEN_HABITS = "The 7 Habits of Highly Effective People";
const SHARMA = "Robin Sharma";
const WEALTH = "The Wealth Money Can't Buy";
const KLEON = "Austin Kleon";
const SHOW_YOUR_WORK = "Show Your Work!";
const NIEUWHOF = "Carey Nieuwhof";
const DIDNT_SEE_IT = "Didn't See It Coming";
const BIBLE = "The Bible";

const rawQuotes = [
    // ── The 7 Habits of Highly Effective People ─────────────────────────────
    {
        text: "Each of us tends to think we see things as they are, that we are objective. But this is not the case. We see the world not as it is, but as we are, or as we are conditioned to see it. When we open our mouths to describe what we see, we are in effect describing ourselves, our perceptions, our paradigms.",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["mindset"],
    },
    {
        text: "Management is doing things right; leadership is doing the right things. Management is efficiency in climbing the ladder of success; leadership determines whether the ladder is leaning against the right wall.",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["leadership"],
    },
    {
        text: "People can't live with change if there's not a changeless core inside them.",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["growth", "purpose"],
    },
    {
        text: "Because the church is a formal organisation made up of policies, programs, practices and people, it cannot by itself give a person any deep, permanent security or sense of intrinsic worth. Living the principles taught by the church can do this, but the organisation alone cannot.",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["faith"],
    },
    {
        text: "By centering our lives on timeless, unchanging principles, we create a fundamental paradigm of effective living. It is the center that puts all other centers in perspective.",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["purpose"],
    },
    {
        text: "Effective people are not problem-minded; they're opportunity-minded. They feed opportunities and starve problems. They think preventively.",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["mindset", "leadership"],
    },
    {
        text: "The enemy of the \"best\" is often the \"good.\"",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["discipline"],
    },
    {
        text: "The key is not to prioritise what's on your schedule, but to schedule your priorities.",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["discipline"],
    },
    {
        text: "You can't talk yourself out of problems you behave yourself into.",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["relationships", "discipline"],
    },
    {
        text: "If you want to achieve your highest aspirations and overcome your greatest challenges, identify and apply the principle or natural law that governs the results you seek.",
        sourceType: "person", author: COVEY, themes: ["purpose"],
    },
    {
        text: "That which is most personal is most general. The more authentic you become, the more genuine in your expression, particularly regarding personal experiences and even self-doubt, the more people can relate to your expression and the safer it makes them feel to express themselves.",
        sourceType: "book", author: COVEY, work: SEVEN_HABITS, themes: ["relationships", "courage"],
    },
    {
        text: "For every thousand hacking at the leaves of evil, there is one striking at the root.",
        sourceType: "person", author: "Henry David Thoreau", work: "Walden", themes: ["mindset", "leadership"],
    },
    {
        text: "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.",
        sourceType: "person", author: "Albert Einstein", attributed: true, themes: ["mindset"],
    },
    {
        text: "We are what we repeatedly do. Excellence, therefore, is not an act, but a habit.",
        sourceType: "person", author: "Will Durant", themes: ["discipline"],
    },
    {
        text: "Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character; sow a character, reap a destiny.",
        sourceType: "unknown", themes: ["discipline", "mindset"],
    },
    {
        text: "No one can persuade another to change. Each of us guards a gate of change that can only be opened from the inside. We cannot open the gate of another, either by argument or by emotional appeal.",
        sourceType: "person", author: "Marilyn Ferguson", themes: ["growth", "relationships"],
    },
    {
        text: "Lord, give me the courage to change the things that can and ought to be changed, the serenity to accept the things which cannot be changed, and the wisdom to know the difference.",
        sourceType: "person", author: "Reinhold Niebuhr", themes: ["faith", "courage"],
    },
    {
        text: "Ultimately, man should not ask what the meaning of his life is, but rather must recognise that it is he who is asked. In a word, each man is questioned by life; and he can only answer to life by answering for his own life; to life he can only respond by being responsible.",
        sourceType: "book", author: "Viktor E. Frankl", work: "Man's Search for Meaning", themes: ["purpose"],
    },
    {
        text: "Things which matter most must never be at the mercy of things which matter least.",
        sourceType: "person", author: "Johann Wolfgang von Goethe", attributed: true, themes: ["discipline", "purpose"],
    },
    {
        text: "The successful person has the habit of doing the things failures don't like to do. They don't like doing them either necessarily. But their disliking is subordinated to the strength of their purpose.",
        sourceType: "person", author: "Albert E. N. Gray", work: "The Common Denominator of Success", themes: ["discipline"],
    },
    {
        text: "The voice of conscience is so delicate that it is easy to stifle it; but it is also so clear that it is impossible to mistake it.",
        sourceType: "person", author: "Madame de Staël", themes: ["mindset", "faith"],
    },
    {
        text: "You cannot play with the animal in you without becoming wholly animal, play with falsehood without forfeiting your right to truth, play with cruelty without losing your sensitivity of mind. He who wants to keep his garden tidy doesn't reserve a plot for weeds.",
        sourceType: "book", author: "Dag Hammarskjöld", work: "Markings", themes: ["discipline"],
    },
    {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        sourceType: "person", author: "Henry Stanley Haskins", themes: ["mindset", "courage"],
    },

    // ── Robin Sharma ────────────────────────────────────────────────────────
    {
        text: "The smallest of actions is always better than the noblest of intentions.",
        sourceType: "person", author: SHARMA, themes: ["discipline"],
    },
    {
        text: "Genius has far less to do with your genetics and much more to do with your habits.",
        sourceType: "person", author: SHARMA, themes: ["discipline", "growth"],
    },
    {
        text: "A bad day for the ego is a great day for the soul.",
        sourceType: "person", author: SHARMA, themes: ["growth", "mindset"],
    },
    {
        text: "All world-builders and change-leaders are experts at using the language of hope, the vocabulary of execution and the dialect of freedom. They avoid being infected with \"can't.\"",
        sourceType: "person", author: SHARMA, themes: ["leadership"],
    },
    {
        text: "They're masters of yes versus magicians of no.",
        sourceType: "person", author: SHARMA, themes: ["leadership", "mindset"],
    },
    {
        text: "Remember (please) that those who are trying to stunt your dreams are revealing their limitations — not yours.",
        sourceType: "person", author: SHARMA, themes: ["courage"],
    },
    {
        text: "Ideation without execution is the doorway to delusion.",
        sourceType: "person", author: SHARMA, themes: ["discipline", "creativity"],
    },
    {
        text: "Legendary producers are professional resters.",
        sourceType: "person", author: SHARMA, themes: ["discipline"],
    },
    {
        text: "All change is hard at first, messy in the middle and gorgeous at the end.",
        sourceType: "book", author: SHARMA, work: "The Everyday Hero Manifesto", themes: ["growth"],
    },
    {
        text: "Your days are your life in miniature, and as you craft each day, so you create your life. Consistency truly is the mother of mastery, and the little things you do daily are so much more important than the big things that you might do annually.",
        sourceType: "person", author: SHARMA, themes: ["discipline"],
    },
    {
        text: "Life unfolds for your fortune, never for your failure. Trust its strange ways. And keep going. Blessings you can't yet fathom are coming. Your future is (so) bright.",
        sourceType: "person", author: SHARMA, themes: ["faith", "courage"],
    },
    {
        text: "Recreation recreates us.",
        sourceType: "person", author: SHARMA, themes: ["mindset"],
    },
    {
        text: "Just imagine how bright a human life you'll create if you operate in the rare air of seeking to see the blessings in the people who try to curse you.",
        sourceType: "person", author: SHARMA, themes: ["relationships"],
    },
    {
        text: "You cannot have the world you want without doing the things you must.",
        sourceType: "person", author: SHARMA, themes: ["discipline"],
    },
    {
        text: "No idea works for someone unwilling to do any work. And excellent things unfold for people who do excellent things. Having said this, clarity breeds mastery, and you need to do the upfront thinking to know what you want before you take the action to bring it to life.",
        sourceType: "person", author: SHARMA, themes: ["discipline"],
    },

    // ── The Wealth Money Can't Buy ──────────────────────────────────────────
    {
        text: "Small, daily, seemingly insignificant improvements, when done consistently over time, lead to stunning results.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["discipline", "growth"],
    },
    {
        text: "Wounds unhealed become potential unrealised, along with a serious drain on your energy — energy that could be used to create soaring results and to enjoy this supreme gift and expedition that is your life.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["growth"],
    },
    {
        text: "Can you remember who you were, before the world told you who you should be?",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["purpose"],
    },
    {
        text: "Victims make excuses; leaders deliver results.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["leadership"],
    },
    {
        text: "To grow into all you can possibly be is a prize far more precious than anything money could ever buy. Personal mastery is a currency that will make you authentically wealthy. And your wisest investment is making yourself into all you can be.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["growth"],
    },
    {
        text: "The wealth within you, your essence, is your kingdom.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["purpose"],
    },
    {
        text: "You're not broken, you're just human. You're not dysfunctional — you're just alive. If you are willing to get into the game, exercise your native bravery and take some risks to live your future vision, you're going to experience pain. The higher the mountain, the greater the danger. It's not wrong for you to reach for the heavens (and seek to walk with the gods). No — it's ever so right. It means you're the hero of your life, that you have courage enough to take some chances and keep the faith in your mighty mission. What's the alternative? Dead person walking. How wonderful that you still believe in you! So you've been hurt. And yes, you've been scarred. I get you. I've been there too. Yet may I humbly suggest that you celebrate your scars. And worship your wounds. Because they have served you beautifully, filling your life with unseen gifts, hidden treasures of wisdom, understanding, resilience, compassion and greater intimacy with your specialness.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["courage", "growth"],
    },
    {
        text: "The right conversation could set your life in a completely new direction. All it takes is one new idea to revolutionise your world. And if one finds the right book at the right time, the writer's stardust rubs off on you. And the hand that eventually puts down the book is a fundamentally different hand.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["growth", "creativity"],
    },
    {
        text: "The discomfort of growth is always smaller than the heartbreak of regret.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["growth", "courage"],
    },
    {
        text: "Understand that the illusion of safety is always more dangerous than the discomfort of growth.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["courage"],
    },
    {
        text: "Create your career on your terms. Your days are too numbered to be unhappy.",
        sourceType: "book", author: SHARMA, work: WEALTH, themes: ["purpose"],
    },
    {
        text: "Do not let your fire go out, spark by irreplaceable spark, in the hopeless swamps of the not-quite, the not-yet, and the not-at-all. Do not let the hero in your soul perish in lonely frustration for the life you deserved, but have never been able to reach. The world you desire can be won. It exists, it is real, it is yours.",
        sourceType: "book", author: "Ayn Rand", work: "Atlas Shrugged", via: WEALTH, themes: ["courage", "purpose"],
    },

    // ── Show Your Work! ─────────────────────────────────────────────────────
    {
        text: "The stupidest possible creative act is still a creative act. On the spectrum of creative work, the difference between the mediocre and the good is vast. Mediocrity is, however, still on the spectrum; you can move from mediocre to good in increments. The real gap is between doing nothing and doing something. Amateurs know that contributing something is better than contributing nothing.",
        sourceType: "book", author: KLEON, work: SHOW_YOUR_WORK, themes: ["creativity", "courage"],
    },
    {
        text: "Amateurs fit the same bill. They're just regular people who get obsessed by something and spend a ton of time thinking out loud about it.",
        sourceType: "book", author: KLEON, work: SHOW_YOUR_WORK, themes: ["creativity"],
    },
    {
        text: "It sounds a little extreme, but in this day and age, if your work isn't online, it doesn't exist. We all have the opportunity to use our voices, to have our say, but so many of us are wasting it. If you want people to know about what you do and the things you care about, you have to share.",
        sourceType: "book", author: KLEON, work: SHOW_YOUR_WORK, themes: ["creativity"],
    },
    {
        text: "I like the tagline at dribbble.com: \"What are you working on?\" Stick to that question and you'll be good. Don't show your lunch or your latte; show your work.",
        sourceType: "book", author: KLEON, work: SHOW_YOUR_WORK, themes: ["creativity"],
    },
    {
        text: "Compulsive avoidance of embarrassment is a form of suicide. If you spend your life avoiding vulnerability, you and your work will never truly connect with other people.",
        sourceType: "book", author: KLEON, work: SHOW_YOUR_WORK, themes: ["creativity", "courage"],
    },
    {
        text: "Keep your balance. You have to remember that your work is something you do, not who you are.",
        sourceType: "book", author: KLEON, work: SHOW_YOUR_WORK, themes: ["creativity", "mindset"],
    },
    {
        text: "You can't count on success; you can only leave open the possibility for it, and be ready to jump on and take the ride when it comes for you.",
        sourceType: "book", author: KLEON, work: SHOW_YOUR_WORK, themes: ["creativity", "mindset"],
    },

    // ── Other books ─────────────────────────────────────────────────────────
    {
        text: "Don't let the technician become the entrepreneur.",
        sourceType: "book", author: "Michael E. Gerber", work: "The E-Myth Revisited", themes: ["leadership"],
    },
    {
        text: "Once you recognise that the purpose of your life is not to serve your business, but that the primary purpose of your business is to serve your life, then you can go to work on your business, and not in your business.",
        sourceType: "book", author: "Michael E. Gerber", work: "The E-Myth Revisited", themes: ["leadership", "purpose"],
    },
    {
        text: "The difference between a warrior and an ordinary man is that a warrior sees everything as a challenge, whereas an ordinary man sees everything as either a blessing or a curse.",
        sourceType: "book", author: "Michael E. Gerber", work: "The E-Myth Revisited", themes: ["mindset", "courage"],
    },
    {
        text: "When you hear something, you will forget it; when you see something, you will remember it; but it's not until you have done something that you will truly understand it.",
        sourceType: "book", author: "Michael E. Gerber", work: "The E-Myth Revisited", themes: ["growth"],
    },
    {
        text: "We need to be eventually right, not right the first time.",
        sourceType: "book", author: "Eric Ries", work: "The Leader's Guide", themes: ["leadership", "growth"],
    },
    {
        text: "Go from \"What should we build?\" to \"Should we build it?\"",
        sourceType: "book", author: "Eric Ries", work: "The Leader's Guide", themes: ["leadership", "creativity"],
    },
    {
        text: "When you're healthy, you have a thousand goals and dreams, but when you're not, you only have one.",
        sourceType: "book", author: "Dan Martell", work: "Buy Back Your Time", themes: ["purpose"],
    },
    {
        text: "If I can lose, I can win. If I can't lose, I can never win.",
        sourceType: "book", work: "Nobody Cares About Your Career", themes: ["courage"],
    },
    {
        text: "The greatest threat to success is not failure but boredom.",
        sourceType: "book", author: "James Clear", work: "Atomic Habits", themes: ["discipline"],
    },
    {
        text: "There are no solutions; only trade-offs.",
        sourceType: "person", author: "Thomas Sowell", via: "Essentialism", themes: ["mindset", "leadership"],
    },
    {
        text: "Without great solitude, no serious work is possible.",
        sourceType: "person", author: "Pablo Picasso", via: "Essentialism", themes: ["creativity", "discipline"],
    },
    {
        text: "When you turn to face the sun, the shadows fall behind you.",
        sourceType: "book", work: "When You Turn to Face the Sun the Shadows Fall Behind You", themes: ["mindset", "courage"],
    },
    {
        text: "If not enough people doubt you, then you're not making a difference.",
        sourceType: "book", author: "Seth Godin", work: "The Icarus Deception", themes: ["courage", "creativity"],
    },
    {
        text: "It doesn't matter how strong you are when you are poisoned in your sleep.",
        sourceType: "book", author: "Will Wight", work: "Unsouled", themes: ["mindset"],
    },
    {
        text: "Whenever you feel like criticising anyone, just remember that all the people in this world haven't had the advantages that you've had.",
        sourceType: "book", author: "F. Scott Fitzgerald", work: "The Great Gatsby", themes: ["relationships"],
    },
    {
        text: "Life is a matter of how we see the challenges in front of us. Persist, pivot or concede. It's up to us. Our choice. Every time.",
        sourceType: "book", author: "Matthew McConaughey", work: "Greenlights", themes: ["mindset", "courage"],
    },
    {
        text: "They taught me not to hate, to never say \"I can't\", and not to lie.",
        sourceType: "book", author: "Matthew McConaughey", work: "Greenlights", themes: ["relationships", "discipline"],
    },
    {
        text: "A man is rich in proportion to the number of things he can afford to let alone.",
        sourceType: "person", author: "Henry David Thoreau", work: "Walden", via: "The 4-Hour Workweek", themes: ["mindset", "purpose"],
    },
    {
        text: "If you listen longer than most people listen, you'll hear things most people never hear.",
        sourceType: "book", themes: ["relationships", "growth"],
    },
    {
        text: "We judge other people by their actions, but we judge ourselves by our intentions.",
        sourceType: "book", author: NIEUWHOF, work: DIDNT_SEE_IT, themes: ["relationships"],
    },
    {
        text: "Work twice as hard on your character as you do on your competencies.",
        sourceType: "book", author: NIEUWHOF, work: DIDNT_SEE_IT, themes: ["leadership", "growth"],
    },
    {
        text: "What do I need to do — or not do — today that will help me thrive tomorrow?",
        sourceType: "book", author: NIEUWHOF, work: DIDNT_SEE_IT, themes: ["discipline"],
    },
    {
        text: "Without knowledge of self there is no knowledge of God; without knowledge of God there is no knowledge of self.",
        sourceType: "person", author: "John Calvin", via: DIDNT_SEE_IT, themes: ["faith"],
    },
    {
        text: "You can move more people with sunshine than with wind.",
        sourceType: "book", author: "Dale Carnegie", work: "How to Win Friends and Influence People", themes: ["relationships", "leadership"],
    },
    {
        text: "The key to really great leadership is vulnerability, speaking your truth, being courageous and sticking to your values.",
        sourceType: "book", author: "Brené Brown", work: "Dare to Lead", themes: ["leadership", "courage"],
    },
    {
        text: "When you open yourself up to vulnerability, you open yourself up to courage and creativity. When you let go of perfectionist tendencies and a fear of failure, you find the bravery to improve yourself — and to have difficult, important conversations with colleagues. In other words, you need all of your emotions on board to become a daring leader.",
        sourceType: "book", author: "Brené Brown", work: "Dare to Lead", themes: ["leadership", "courage"],
    },

    // ── The Bible ───────────────────────────────────────────────────────────
    {
        text: "Whoever guards his mouth preserves his life; he who opens wide his lips comes to ruin.",
        sourceType: "book", work: BIBLE, reference: "Proverbs 13:3", themes: ["faith", "relationships"],
    },
    {
        text: "Be joyful in hope, patient in affliction, faithful in prayer.",
        sourceType: "book", work: BIBLE, reference: "Romans 12:12", themes: ["faith"],
    },
    {
        text: "Hardship produces in you patient endurance.",
        sourceType: "book", work: BIBLE, reference: "2 Corinthians 1:6", themes: ["faith", "courage"],
    },
    {
        text: "Just as you share in our sufferings, so also you share in our comfort.",
        sourceType: "book", work: BIBLE, reference: "2 Corinthians 1:7", themes: ["faith", "relationships"],
    },
    {
        text: "As long as he sought the Lord, God gave him success.",
        sourceType: "book", work: BIBLE, reference: "2 Chronicles 26:5", themes: ["faith"],
    },
    {
        text: "Now faith is the assurance of things hoped for, the conviction of things not seen. For by it the people of old received their commendation. By faith we understand that the universe was created by the word of God, so that what is seen was not made out of things that are visible.",
        sourceType: "book", work: BIBLE, reference: "Hebrews 11:1–3", themes: ["faith"],
    },
    {
        text: "Anxiety weighs down the heart, but a kind word cheers it up.",
        sourceType: "book", work: BIBLE, reference: "Proverbs 12:25", themes: ["faith", "relationships"],
    },
    {
        text: "Love wisdom like a sister; make insight a beloved member of your family.",
        sourceType: "book", work: BIBLE, reference: "Proverbs 7:4", themes: ["faith", "growth"],
    },

    // ── People ──────────────────────────────────────────────────────────────
    {
        text: "This is the true joy in life, being used for a purpose recognised by yourself as a mighty one; being a force of nature instead of a feverish, selfish little clod of ailments and grievances complaining that the world will not devote itself to making you happy. I am of the opinion that my life belongs to the whole community, and as long as I live it is my privilege to do for it whatever I can. I want to be thoroughly used up when I die, for the harder I work, the more I live. I rejoice in life for its own sake. Life is no brief candle to me. It is a sort of splendid torch which I have got hold of for the moment, and I want to make it burn as brightly as possible before handing it on to future generations.",
        sourceType: "person", author: "George Bernard Shaw", themes: ["purpose"],
    },
    {
        text: "The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.",
        sourceType: "person", author: "George Bernard Shaw", themes: ["leadership", "courage"],
    },
    {
        text: "Service is the rent we pay for the privilege of living on this earth.",
        sourceType: "person", author: "Shirley Chisholm", attributed: true, themes: ["purpose"],
    },
    {
        text: "We seek not to imitate the masters; rather, we seek what they sought.",
        sourceType: "person", author: "Matsuo Bashō", attributed: true, themes: ["growth", "creativity"],
    },
    {
        text: "The essential difference between emotion and reason is that emotion leads to action, while reason leads to conclusions.",
        sourceType: "person", author: "Donald Calne", themes: ["mindset"],
    },
    {
        text: "Everything that irritates us about others can lead us to an understanding of ourselves.",
        sourceType: "person", author: "Carl Jung", themes: ["mindset", "relationships"],
    },
    {
        text: "Comparison is the thief of joy.",
        sourceType: "person", author: "Theodore Roosevelt", attributed: true, themes: ["mindset"],
    },
    {
        text: "Humility is not thinking less of yourself, but thinking of yourself less.",
        sourceType: "person", author: "Rick Warren", themes: ["faith", "relationships"],
    },
    {
        text: "People living deeply have no fear of dying.",
        sourceType: "person", author: "Anaïs Nin", themes: ["purpose", "courage"],
    },
    {
        text: "The great tragedy of life is not death, but what we allow to die inside of us while we live.",
        sourceType: "person", author: "Norman Cousins", themes: ["purpose"],
    },
    {
        text: "We could never learn to be brave and patient if there were only joy in the world.",
        sourceType: "person", author: "Helen Keller", themes: ["courage", "faith"],
    },
    {
        text: "Don't put a question mark where God has put a period.",
        sourceType: "person", author: "Gracie Allen", attributed: true, themes: ["faith"],
    },
    {
        text: "Perhaps it will be; perhaps it will not. Meanwhile, it is not.",
        sourceType: "person", author: "Seneca", themes: ["mindset", "courage"],
    },
    {
        text: "Fire tests gold; misfortune, brave men.",
        sourceType: "person", author: "Seneca", themes: ["courage"],
    },
    {
        text: "If you look at the world, you'll be distressed. If you look within, you'll be depressed. If you look to Christ, you'll be at rest.",
        sourceType: "person", author: "Corrie ten Boom", attributed: true, themes: ["faith"],
    },
    {
        text: "Faith is to believe what we do not see; and the reward of this faith is to see what we believe.",
        sourceType: "person", author: "Saint Augustine", themes: ["faith"],
    },
    {
        text: "Action isn't just the effect of motivation; it's also the cause of it.",
        sourceType: "person", author: "Mark Manson", themes: ["discipline"],
    },
    {
        text: "Don't get set into one form, adapt it and build your own, and let it grow, be like water. Empty your mind, be formless, shapeless — like water. Now you put water in a cup, it becomes the cup; you put water into a bottle, it becomes the bottle; you put it in a teapot, it becomes the teapot. Now water can flow or it can crash. Be water, my friend.",
        sourceType: "person", author: "Bruce Lee", themes: ["growth", "mindset"],
    },
    {
        text: "One's only rival is one's own potentialities. One's only failure is failing to live up to one's own possibilities. In this sense every person can be as royalty, and therefore must be treated like royalty.",
        sourceType: "person", author: "Abraham Maslow", themes: ["growth", "relationships"],
    },
    {
        text: "Perfect confidence is granted to the less talented as a consolation prize.",
        sourceType: "person", author: "Robert Hughes", themes: ["creativity", "mindset"],
    },
    {
        text: "It is easy to break down and destroy. The heroes are those who make peace and build.",
        sourceType: "person", author: "Nelson Mandela", themes: ["leadership"],
    },
    {
        text: "Only those who devote themselves to a cause with their whole strength and soul can be true masters. For this reason, mastery demands all of a person.",
        sourceType: "person", author: "Albert Einstein", themes: ["discipline", "purpose"],
    },
    {
        text: "It's not about \"I will take care of you if you take care of me\"; it's about \"I will take care of me for you, if you take care of you for me.\"",
        sourceType: "person", author: "Jim Rohn", themes: ["relationships"],
    },
    {
        text: "The man who moves a mountain begins by carrying away small stones.",
        sourceType: "person", author: "Confucius", attributed: true, themes: ["discipline"],
    },
    {
        text: "You are remembered for the rules you break.",
        sourceType: "person", author: "Douglas MacArthur", attributed: true, themes: ["courage", "leadership"],
    },
    {
        text: "If you get simple beauty and naught else, you get about the best thing God invents.",
        sourceType: "person", author: "Robert Browning", themes: ["faith", "creativity"],
    },
    {
        text: "Don't tell people how to do things. Tell them what to do and let them surprise you with their results.",
        sourceType: "person", author: "George S. Patton", themes: ["leadership"],
    },
    {
        text: "When I pray, coincidences happen; when I don't, they don't.",
        sourceType: "person", author: "William Temple", themes: ["faith"],
    },
    {
        text: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
        sourceType: "person", author: "Robert G. Ingersoll", attributed: true, themes: ["leadership"],
    },
    {
        text: "Nobody succeeds beyond his wildest expectations unless he begins with some wild expectations.",
        sourceType: "person", author: "Ralph Charell", themes: ["courage", "purpose"],
    },
    {
        text: "Leadership is a potent combination of strategy and character. But if you must be without one, be without the strategy.",
        sourceType: "person", author: "Norman Schwarzkopf", themes: ["leadership"],
    },
    {
        text: "You can only connect the dots looking backwards; you can't connect them looking forward.",
        sourceType: "person", author: "Steve Jobs", themes: ["faith", "purpose"],
    },
    {
        text: "To attain knowledge, add things every day. To attain wisdom, subtract things every day.",
        sourceType: "person", author: "Lao Tzu", attributed: true, themes: ["growth"],
    },
    {
        text: "Routine, in an intelligent man, is a sign of ambition.",
        sourceType: "person", author: "W. H. Auden", themes: ["discipline"],
    },
    {
        text: "There are lots of ways of being miserable, but there's only one way of being comfortable, and that is to stop running around after happiness.",
        sourceType: "person", author: "Edith Wharton", themes: ["mindset"],
    },
    {
        text: "In the beginner's mind, there are many possibilities. In the expert's mind, there are few.",
        sourceType: "person", author: "Shunryu Suzuki", themes: ["growth", "mindset"],
    },
    {
        text: "In order for connection to happen, we have to allow ourselves to be seen — really seen.",
        sourceType: "person", author: "Brené Brown", themes: ["relationships", "courage"],
    },
    {
        text: "I can't work with you until I work with you.",
        sourceType: "person", author: "Seth Godin", themes: ["relationships", "leadership"],
    },
    {
        text: "You do not need tools to make your art; you just need to care.",
        sourceType: "person", author: "Seth Godin", themes: ["creativity"],
    },
    {
        text: "When the person you're hoping to become meets the person you're becoming, how will that meeting go?",
        sourceType: "person", author: "Seth Godin", themes: ["growth"],
    },
    {
        text: "My goal is to build a life I don't need a vacation from.",
        sourceType: "person", author: "Rob Hill Sr.", themes: ["purpose"],
    },
    {
        text: "Don't judge each day by the harvest you reap but by the seeds you plant.",
        sourceType: "person", author: "Robert Louis Stevenson", themes: ["discipline", "growth"],
    },
    {
        text: "Real self-confidence doesn't come from shouting affirmations in the mirror. Real self-confidence comes from giving the world irrefutable proof that you are who you say you are.",
        sourceType: "person", author: "Alex Hormozi", themes: ["courage", "discipline"],
    },
    {
        text: "The only devils in the world are those running around inside ourselves. This is where the battle should be fought.",
        sourceType: "person", author: "Mahatma Gandhi", themes: ["mindset"],
    },
    {
        text: "You'll never feel ready, because ready isn't a feeling — it's a decision.",
        sourceType: "person", author: "Mel Robbins", themes: ["courage"],
    },
    {
        text: "Worrying is the worst way to use your imagination.",
        sourceType: "person", author: "Mel Robbins", attributed: true, themes: ["mindset"],
    },
    {
        text: "Peace comes when you realise that everything that's out of your control should be out of your mind.",
        sourceType: "person", author: "Mel Robbins", themes: ["mindset"],
    },
    {
        text: "Life is a mystery looking forward and a science looking back.",
        sourceType: "person", author: "Matthew McConaughey", themes: ["purpose", "faith"],
    },
    {
        text: "Any fool can criticise, condemn and complain — and most fools do.",
        sourceType: "person", author: "Dale Carnegie", themes: ["relationships"],
    },
    {
        text: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.",
        sourceType: "person", author: "Frank Herbert", work: "Dune", themes: ["courage"],
    },
    {
        text: "The unexamined life is not worth living.",
        sourceType: "person", author: "Socrates", themes: ["growth", "purpose"],
    },
    {
        text: "You belong in every room you're brave enough to enter, and the room that intimidates you most is the one that needs your perspective the most.",
        sourceType: "person", author: "Steven Bartlett", themes: ["courage"],
    },
    {
        text: "Do the best you can until you know better. Then, when you know better, do better.",
        sourceType: "person", author: "Maya Angelou", themes: ["growth"],
    },
    {
        text: "A man is great not because he hasn't failed; a man is great because failure hasn't stopped him.",
        sourceType: "person", author: "Confucius", attributed: true, themes: ["courage", "growth"],
    },
    {
        text: "The best answer to anger is silence.",
        sourceType: "person", author: "Marcus Aurelius", attributed: true, themes: ["mindset", "relationships"],
    },
    {
        text: "The chains of habit are too light to be felt until they are too heavy to be broken.",
        sourceType: "person", author: "Warren Buffett", attributed: true, themes: ["discipline"],
    },
    {
        text: "You're under no obligation to be the same person you were five minutes ago.",
        sourceType: "person", author: "Alan Watts", themes: ["growth"],
    },
    {
        text: "I can tell you from experience, the effect you have on others is the most valuable currency there is.",
        sourceType: "person", author: "Jim Carrey", themes: ["relationships", "purpose"],
    },
    {
        text: "The magic you are looking for is in the work you're avoiding.",
        sourceType: "person", author: "Chris Williamson", attributed: true, themes: ["discipline", "courage"],
    },
    {
        text: "We are drowning in information but starving for wisdom.",
        sourceType: "person", author: "E. O. Wilson", via: "Tony Robbins", themes: ["growth", "mindset"],
    },
    {
        text: "Nothing in life has any meaning except the meaning I give it.",
        sourceType: "person", author: "Tony Robbins", themes: ["mindset", "purpose"],
    },
    {
        text: "People will always do more for those they love than they will do for themselves.",
        sourceType: "person", author: "Tony Robbins", themes: ["relationships"],
    },
    {
        text: "People don't learn when they don't see a reason to.",
        sourceType: "person", author: "Tony Robbins", themes: ["growth", "leadership"],
    },
    {
        text: "Embarrassment is just the cost of entry. Everyone good has already paid it. Do whatever is necessary to win. And win.",
        sourceType: "person", author: "Dan Martell", themes: ["courage"],
    },
    {
        text: "You can't have an easy life and a great character.",
        sourceType: "person", author: "Jimmy Carr", themes: ["courage", "growth"],
    },
    {
        text: "Times of danger are also times of opportunity. In such moments, people are fearful, assets are underpriced and the competition is distracted.",
        sourceType: "person", author: "Adrian Gore", themes: ["leadership", "courage"],
    },
    {
        text: "The best time to plant a tree was 20 years ago; the second best time is now.",
        sourceType: "unknown", author: "Chinese proverb", themes: ["discipline", "growth"],
    },
    {
        text: "The man who asks a question is a fool for a minute; the man who does not ask is a fool for life.",
        sourceType: "unknown", author: "Chinese proverb", themes: ["growth", "courage"],
    },
    {
        text: "A funeral pyre burns the dead, while worry consumes the living.",
        sourceType: "unknown", author: "Sanskrit proverb", themes: ["mindset"],
    },
    {
        text: "Pleasure and pain, praise and blame, gain and loss, fame and disgrace — the eight worldly dharmas.",
        sourceType: "unknown", author: "Buddhist teaching", themes: ["mindset"],
    },

    // ── Unknown (and found along the way) ───────────────────────────────────
    {
        text: "We don't live longer when we try not to die; we live longer when we are too busy living.",
        sourceType: "unknown", themes: ["purpose"],
    },
    {
        text: "The tools for learning are abundant. It's the desire to learn that's scarce.",
        sourceType: "unknown", themes: ["growth"],
    },
    {
        text: "We don't rise to the level of our expectations; we fall to the level of our training.",
        sourceType: "person", author: "Archilochus", attributed: true, themes: ["discipline"],
    },
    {
        text: "Courage is not the absence of fear, but rather the awareness that something else is more important.",
        sourceType: "unknown", themes: ["courage"],
    },
    {
        text: "Do anything long enough and you'll get some depth of insight and understanding about it.",
        sourceType: "unknown", themes: ["discipline", "growth"],
    },
    {
        text: "If everyone was satisfied with themselves, there would be no superheroes.",
        sourceType: "unknown", themes: ["growth", "courage"],
    },
    {
        text: "Great people build monuments from the stones that critics throw at them.",
        sourceType: "unknown", themes: ["courage"],
    },
    {
        text: "The price of discipline is always less than the pain of regret.",
        sourceType: "unknown", themes: ["discipline"],
    },
    {
        text: "A mistake is only a mistake if you make it twice.",
        sourceType: "unknown", themes: ["growth"],
    },
    {
        text: "Expectation is the thief of joy.",
        sourceType: "unknown", themes: ["mindset"],
    },
    {
        text: "Most of the things that fill you with fear never happen. So why let them keep you small?",
        sourceType: "unknown", themes: ["courage", "mindset"],
    },
    {
        text: "The weaker you must experience a death of sorts before the stronger you can know a rebirth. If improvement doesn't feel different, it's not real improvement, is it?",
        sourceType: "unknown", themes: ["growth"],
    },
    {
        text: "Success without self-respect is an empty victory, isn't it?",
        sourceType: "unknown", themes: ["purpose"],
    },
    {
        text: "When you were born, you cried while the world rejoiced. Live your life in such a way that when you die, the world cries while you rejoice.",
        sourceType: "unknown", themes: ["purpose"],
    },
    {
        text: "The failure to perform right action means the triumph of the mean-spirited, the ungenerous and those who would rather view everyone in darkness than see all shine brightly.",
        sourceType: "unknown", themes: ["leadership", "courage"],
    },
    {
        text: "I don't like to talk about my qualities very much, because I would sound arrogant. I also don't like to talk about my failures, because it's your job to find them.",
        sourceType: "unknown", themes: ["mindset"],
    },
    {
        text: "Vision is foresight with insight based on hindsight.",
        sourceType: "unknown", themes: ["leadership"],
    },
    {
        text: "You don't drown by falling into the water; you drown by not swimming once you do.",
        sourceType: "unknown", themes: ["courage"],
    },
    {
        text: "Shortcut to the greatest wealth: not wanting something is just as good as having it. The important thing either way is the same — freedom from worry.",
        sourceType: "unknown", themes: ["mindset", "purpose"],
    },
    {
        text: "Conflict delayed is conflict multiplied.",
        sourceType: "unknown", themes: ["relationships", "leadership"],
    },
    {
        text: "It's easier to act yourself into a new way of thinking than it is to think yourself into a new way of acting.",
        sourceType: "unknown", themes: ["discipline", "mindset"],
    },
    {
        text: "A breathtaking vision not backed up by pristine daily implementation is the primary mistake of promise neglected.",
        sourceType: "unknown", themes: ["discipline", "leadership"],
    },
    {
        text: "Wisdom meets you where you're at.",
        sourceType: "unknown", themes: ["growth", "faith"],
    },
    {
        text: "Do or don't. There is no how.",
        sourceType: "unknown", themes: ["discipline"],
    },
    {
        text: "Certainty is the enemy of growth.",
        sourceType: "unknown", themes: ["growth", "mindset"],
    },
    {
        text: "When life seems tough and you wonder why, please remember: the teacher is always quiet during a test.",
        sourceType: "unknown", themes: ["faith", "courage"],
    },
    {
        text: "Disconnect yourself from your pain and you'll also disconnect yourself from joy — and primal genius.",
        sourceType: "unknown", themes: ["growth", "creativity"],
    },
    {
        text: "When one has fair health, a fair fortune, a tidy conscience and a complete exemption from embarrassing relatives, I suppose one is bound, in delicacy, to write oneself happy.",
        sourceType: "unknown", themes: ["mindset"],
    },
    {
        text: "Jesus did not come to make life easy; He came to make people great.",
        sourceType: "unknown", themes: ["faith"],
    },
    {
        text: "Your perception of your capacity actively creates your reality.",
        sourceType: "unknown", themes: ["mindset"],
    },
    {
        text: "Resilience and extreme grit are not innate qualities. They are character traits that get forged in the fire of dangerous conditions.",
        sourceType: "unknown", themes: ["courage", "growth"],
    },
    {
        text: "Why condemn difficulty when it is the very medicine and supplementation that will make you stronger? Befriend it for what it is: a necessary condition that will promote your evolution.",
        sourceType: "unknown", themes: ["growth", "courage"],
    },
    {
        text: "So-called \"problems\" are actually platforms required for the prodigious power sleeping within you to awaken and express itself.",
        sourceType: "unknown", themes: ["mindset", "growth"],
    },
    {
        text: "Your daily behaviour always reflects your deepest beliefs.",
        sourceType: "unknown", themes: ["discipline", "mindset"],
    },
    {
        text: "They are possessed by service and obsessed with impact. And because they enrich the lives of so many, a loving reality responds with plenty.",
        sourceType: "unknown", themes: ["purpose"],
    },
    {
        text: "The shocking truth about prosperity is that it is shockingly right, instead of shockingly wrong, for you to be prosperous. The word \"rich\" means having an abundance of good or living a fuller, more satisfying life. Indeed, you are prosperous to the degree that you are experiencing peace, health, happiness and plenty in your world. There are honourable methods that can carry you quickly toward that goal. It is easier to accomplish than you may now think.",
        sourceType: "person", author: "Catherine Ponder", attributed: true, themes: ["purpose", "mindset"],
    },
    {
        text: "Naysayers are mostly disappointed souls who didn't do what you've done, so it makes them feel better lashing out at you. Misery always seeks company.",
        sourceType: "unknown", themes: ["courage"],
    },
    {
        text: "Anyone who provokes your insecurity and incites that part of you that doubts your mastery is a helper. Their mean behaviour brings up your weakness so you can notice it and then process through it into healing. Wonderful. Thank them. For they've made you healthier, purer and better. They've served your ascent toward your inherent greatness.",
        sourceType: "unknown", themes: ["growth", "relationships"],
    },
    {
        text: "Taking an honest look at our failings helps us turn them into wisdom. Embracing our hurt allows us to remake it into strength.",
        sourceType: "unknown", themes: ["growth"],
    },
    {
        text: "For some to love you, some must loathe you.",
        sourceType: "unknown", themes: ["courage", "relationships"],
    },
    {
        text: "Don't criticise what you don't understand.",
        sourceType: "unknown", themes: ["relationships"],
    },
    {
        text: "It usually takes a decade of daily practice and continuous training to make something look simple. True artistry is so much more about what the producer decides not to put into the product than what they put in. That's where the real genius lies.",
        sourceType: "unknown", themes: ["creativity", "discipline"],
    },
    {
        text: "It takes so little to make someone happy.",
        sourceType: "unknown", themes: ["relationships"],
    },
    {
        text: "Don't hold back on being the most loving person you've ever met. It's a habit of giants and the truest luminaries of history. If you're good and people take advantage of you, it's not because being good is bad. It's because you've allowed people to take advantage of you. The one who loves most wins. Or as Jimi Hendrix observed: \"When the power of love overcomes the love of power, the world will know peace.\"",
        sourceType: "unknown", themes: ["relationships"],
    },
    {
        text: "Making time for instances of awe and beauty to unfold, and having a ton of fun while your heart is fully alive, is wisdom at its best.",
        sourceType: "unknown", themes: ["purpose", "mindset"],
    },
    {
        text: "Reason destroys what could have been many life-changing experiences. Trust your heart. It really is so much wiser than your head.",
        sourceType: "unknown", themes: ["courage"],
    },
    {
        text: "Enjoy the company of wise people, the companionship of inspiring books and a healthy relationship with your sovereign self. Remain bold, knowing that the meek and timid do not know the soaring flights that come from leaning into your fears. To postpone the life of your ideals is to invite resentment into your days. Remember that terror is closer to triumph than complacency is. And that fear becomes faith when you walk into it.",
        sourceType: "unknown", themes: ["courage", "growth"],
    },
    {
        text: "Failure and hardships are chances to start all over again and to make it better.",
        sourceType: "unknown", themes: ["growth"],
    },
    {
        text: "If you welcome difference, you are bound to make one.",
        sourceType: "unknown", themes: ["leadership", "relationships"],
    },
    {
        text: "Many people make the mistake of measuring their progress against a future ideal they have in their heads. But that's a recipe for disappointment. The future hasn't happened yet, so it isn't real. But the past is. Measuring your specific results against the past allows you to really understand how far you've come.",
        sourceType: "unknown", themes: ["growth", "mindset"],
    },
    {
        text: "Our society is set up on strengthening our weaknesses rather than building upon our strengths.",
        sourceType: "unknown", themes: ["leadership", "growth"],
    },
    {
        text: "Imposter syndrome is a sign that you still have a skill to learn or an experience to have.",
        sourceType: "unknown", themes: ["growth", "courage"],
    },
    {
        text: "You only discover your potential when you are in pain.",
        sourceType: "unknown", themes: ["growth", "courage"],
    },
    {
        text: "Worship is the consummation of joy. Our joy is not complete until it is expressed in worship.",
        sourceType: "unknown", via: "Bible App", themes: ["faith"],
    },
    {
        text: "The pessimist sees the difficulty in every opportunity; the optimist sees the opportunity in every difficulty.",
        sourceType: "unknown", themes: ["mindset"],
    },
    {
        text: "Wear failure as a badge of honour.",
        sourceType: "unknown", themes: ["growth", "courage"],
    },
    {
        text: "Before you give critical feedback, ask yourself: Am I the right person? Do I have the right motive? Do I know the right way? Is it the right time?",
        sourceType: "unknown", themes: ["relationships", "leadership"],
    },
    {
        text: "Words are weapons, capable of inflicting emotional wounds that can take years to heal.",
        sourceType: "unknown", themes: ["relationships"],
    },
    {
        text: "Separate the person from the problem. Not \"it is my problem\" or \"it is your problem\" — \"it is the problem.\"",
        sourceType: "unknown", themes: ["relationships"],
    },
    {
        text: "The first to apologise is the bravest, the first to forgive is the strongest, and the first to forget is the happiest.",
        sourceType: "unknown", themes: ["relationships", "courage"],
    },
    {
        text: "Thought is the most immersive of all illusions.",
        sourceType: "unknown", themes: ["mindset"],
    },
    {
        text: "Be before you learn, and learn before you do. Progress is not only achieved by learning or doing — sometimes it's good to just be.",
        sourceType: "unknown", themes: ["growth", "mindset"],
    },
    {
        text: "What you resist will persist. What you befriend will help you transcend.",
        sourceType: "unknown", themes: ["growth", "mindset"],
    },
    {
        text: "The more time you spend outside your comfort zone, the more your comfort zone expands.",
        sourceType: "unknown", themes: ["growth", "courage"],
    },
    {
        text: "Things often have to fall before they can be rebuilt in a better way. You can't reach a place of breakthrough without going through a period of breakdown.",
        sourceType: "unknown", themes: ["growth", "faith"],
    },
    {
        text: "Success is not about what you receive. Success is about what you return.",
        sourceType: "unknown", themes: ["purpose"],
    },
    {
        text: "If service is beneath you, then leadership is beyond you.",
        sourceType: "unknown", themes: ["leadership", "purpose"],
    },
    {
        text: "Experience is the highest form of knowledge.",
        sourceType: "unknown", themes: ["growth"],
    },
    {
        text: "All that is meant for one is to find one.",
        sourceType: "unknown", themes: ["faith"],
    },
    {
        text: "The word of the Lord is not for information; it's for transformation.",
        sourceType: "unknown", themes: ["faith", "growth"],
    },
    {
        text: "Most of your annoyances can be removed.",
        sourceType: "unknown", themes: ["mindset"],
    },
    {
        text: "Trust is broken, not earned.",
        sourceType: "unknown", themes: ["relationships"],
    },
    {
        text: "The value of something is the cost of its absence.",
        sourceType: "unknown", themes: ["mindset"],
    },
    {
        text: "We grow old too soon and wise too late.",
        sourceType: "unknown", themes: ["growth"],
    },
    {
        text: "If you're thinking too much, you're not acting enough.",
        sourceType: "unknown", via: "YouTube", themes: ["discipline", "courage"],
    },
    {
        text: "It's not what we look at, but what we see. It's not what we hear, but what we perceive.",
        sourceType: "unknown", via: "Headspace", themes: ["mindset"],
    },
    {
        text: "Free from the past, free from the future, the quiet mind sits down. This single moment may feel small as an idea of time, but as an experience, it's infinite. As we sit and watch the mind, we see how it continually goes back to the past, replaying old experiences over and over again. At other times, it goes to the future, anticipating, perhaps fearing or expecting, those things that haven't even happened yet. We start to see or sense a feeling of movement as the mind goes from the past to the future. It's really only in those moments when we let go of that thinking that we experience the stillness of now. Although now might feel like a very small amount of time in that continuum of past and future, the more time we spend in this moment, the more we understand its limitless nature, and the more we understand that contentment relies on our ability to be present with this moment, right now.",
        sourceType: "unknown", via: "Headspace", themes: ["mindset"],
    },
    {
        text: "The past is a place of reference, not a place of residence; the past is a place of learning, not a place of living.",
        sourceType: "unknown", via: "Instagram", themes: ["growth", "mindset"],
    },
    {
        text: "Forgive yourself for not knowing earlier what only time could teach.",
        sourceType: "unknown", via: "Instagram", themes: ["growth", "relationships"],
    },
    {
        text: "When you're grateful for what you have, you have everything you need.",
        sourceType: "unknown", via: "LinkedIn", themes: ["mindset", "faith"],
    },
    {
        text: "An inch of movement is better than a mile of intentions.",
        sourceType: "unknown", via: "Social media", themes: ["discipline"],
    },
    {
        text: "Just in case someone forgot to tell you: the compass was invented before the clock, because direction is more important than how long it takes you to get there.",
        sourceType: "unknown", via: "Social media", themes: ["purpose"],
    },
    {
        text: "Give people the benefit of the doubt to save your own peace of mind.",
        sourceType: "unknown", via: "Social media", themes: ["relationships", "mindset"],
    },
    {
        text: "You can't give your life more time, so give the time you have more life. Don't just exist — live.",
        sourceType: "unknown", via: "Social media", themes: ["purpose"],
    },
    {
        text: "No matter how many years of work experience you have, if you don't know how to treat people, it's worthless.",
        sourceType: "unknown", via: "Social media", themes: ["relationships", "leadership"],
    },
    {
        text: "The people who seem to have it all figured out are usually just better at moving forward without all the answers.",
        sourceType: "unknown", via: "Social media", themes: ["courage"],
    },
    {
        text: "The great thing about memories is that you can make more.",
        sourceType: "unknown", themes: ["purpose"],
    },
];

export const quotesData = rawQuotes.map((quote, index) => ({
    id: index + 1,
    author: null,
    work: null,
    reference: null,
    via: null,
    attributed: false,
    ...quote,
}));
