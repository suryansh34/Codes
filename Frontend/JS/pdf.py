from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE, MSO_CONNECTOR
from pptx.enum.dml import MSO_LINE_DASH_STYLE

# ============================================================
# PLANNING IN ARTIFICIAL INTELLIGENCE
# 13-slide college presentation
# ============================================================

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# ---------- COLORS ----------
BG = RGBColor(8, 15, 30)
CARD = RGBColor(17, 28, 50)
CARD2 = RGBColor(22, 37, 65)
WHITE = RGBColor(245, 248, 255)
MUTED = RGBColor(170, 185, 210)
BLUE = RGBColor(61, 145, 255)
CYAN = RGBColor(52, 211, 220)
PURPLE = RGBColor(145, 92, 255)
GREEN = RGBColor(52, 211, 153)
ORANGE = RGBColor(255, 171, 64)
RED = RGBColor(255, 92, 92)

FONT = "Aptos"

# ---------- HELPERS ----------
def set_bg(slide, color=BG):
    fill = slide.background.fill
    fill.solid()
    fill.fore_color.rgb = color


def add_text(slide, text, x, y, w, h, size=24,
             color=WHITE, bold=False, align=PP_ALIGN.LEFT,
             font=FONT, valign=MSO_ANCHOR.MIDDLE):
    box = slide.shapes.add_textbox(
        Inches(x), Inches(y), Inches(w), Inches(h)
    )
    tf = box.text_frame
    tf.clear()
    tf.word_wrap = True
    tf.vertical_anchor = valign

    p = tf.paragraphs[0]
    p.alignment = align

    r = p.add_run()
    r.text = text
    r.font.name = font
    r.font.size = Pt(size)
    r.font.bold = bold
    r.font.color.rgb = color

    return box


def add_title(slide, title, subtitle=None):
    add_text(slide, title, 0.65, 0.42, 12, 0.65,
             size=30, bold=True, color=WHITE)

    # Accent line
    line = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        Inches(0.67), Inches(1.18), Inches(1.15), Inches(0.055)
    )
    line.fill.solid()
    line.fill.fore_color.rgb = CYAN
    line.line.fill.background()

    if subtitle:
        add_text(slide, subtitle, 0.68, 1.31, 11.8, 0.45,
                 size=14, color=MUTED)


def add_footer(slide, number):
    add_text(slide, f"{number:02d}", 12.25, 7.02, 0.45, 0.25,
             size=10, color=MUTED, align=PP_ALIGN.RIGHT)


def add_card(slide, x, y, w, h, title, body,
             accent=BLUE, title_size=19, body_size=14):
    shape = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE,
        Inches(x), Inches(y), Inches(w), Inches(h)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = CARD
    shape.line.color.rgb = RGBColor(35, 55, 85)

    # Accent strip
    strip = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        Inches(x), Inches(y), Inches(0.07), Inches(h)
    )
    strip.fill.solid()
    strip.fill.fore_color.rgb = accent
    strip.line.fill.background()

    add_text(slide, title, x + 0.25, y + 0.18, w - 0.45, 0.4,
             size=title_size, bold=True, color=WHITE)

    add_text(slide, body, x + 0.25, y + 0.68, w - 0.45, h - 0.85,
             size=body_size, color=MUTED, valign=MSO_ANCHOR.TOP)

    return shape


def add_node(slide, text, x, y, w, h, color=BLUE, size=16):
    shape = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE,
        Inches(x), Inches(y), Inches(w), Inches(h)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.color.rgb = color

    add_text(slide, text, x, y, w, h,
             size=size, bold=True, color=WHITE,
             align=PP_ALIGN.CENTER)
    return shape


def add_arrow(slide, x1, y1, x2, y2, color=CYAN, width=2.5):
    line = slide.shapes.add_connector(
        MSO_CONNECTOR.STRAIGHT,
        Inches(x1), Inches(y1), Inches(x2), Inches(y2)
    )
    line.line.color.rgb = color
    line.line.width = Pt(width)
    line.line.end_arrowhead = True
    return line


def add_notes(slide, notes):
    # python-pptx does not expose a simple stable public API for
    # editing speaker notes across all versions. We therefore
    # store the speaking points visibly in the slide notes area
    # only when supported.
    try:
        notes_slide = slide.notes_slide
        tf = notes_slide.notes_text_frame
        tf.text = notes
    except Exception:
        pass


# ============================================================
# SLIDE 1 — TITLE
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)

# Decorative circles
for x, y, size, color in [
    (10.8, 0.7, 1.4, PURPLE),
    (11.7, 1.7, 0.7, CYAN),
    (10.3, 5.8, 1.0, BLUE),
]:
    c = slide.shapes.add_shape(
        MSO_SHAPE.OVAL,
        Inches(x), Inches(y), Inches(size), Inches(size)
    )
    c.fill.solid()
    c.fill.fore_color.rgb = color
    c.fill.transparency = 20
    c.line.fill.background()

add_text(slide, "PLANNING", 0.8, 1.55, 8.5, 0.75,
         size=42, bold=True, color=CYAN)
add_text(slide, "IN ARTIFICIAL INTELLIGENCE", 0.8, 2.25, 10.5, 0.85,
         size=34, bold=True, color=WHITE)

add_text(slide,
         "From goals to intelligent actions",
         0.83, 3.25, 8.5, 0.55,
         size=20, color=MUTED)

# Central flow
add_node(slide, "GOAL", 1.0, 4.65, 2.1, 0.8, BLUE, 18)
add_arrow(slide, 3.1, 5.05, 4.05, 5.05)
add_node(slide, "PLAN", 4.1, 4.65, 2.1, 0.8, PURPLE, 18)
add_arrow(slide, 6.2, 5.05, 7.15, 5.05)
add_node(slide, "ACTIONS", 7.2, 4.65, 2.1, 0.8, GREEN, 18)
add_arrow(slide, 9.3, 5.05, 10.25, 5.05)
add_node(slide, "RESULT", 10.3, 4.65, 2.1, 0.8, ORANGE, 18)

add_text(slide, "Presented by: Your Name", 0.83, 6.45, 5.5, 0.35,
         size=15, color=MUTED)

add_notes(slide,
"""Opening:
Planning is one of the important areas of Artificial Intelligence.
It is about deciding what actions an intelligent system should take
to achieve a goal.

A simple example is travelling from home to college.
We know where we are, where we want to go, and the actions available.
AI planning formalizes this process.""")


# ============================================================
# SLIDE 2 — WHAT IS PLANNING?
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "What Is Planning?", "Turning a goal into a sequence of actions")

add_text(slide,
         "Planning is the process of finding actions that transform an "
         "initial state into a desired goal state.",
         0.8, 1.9, 11.8, 0.8, size=23, color=WHITE, bold=True,
         align=PP_ALIGN.CENTER)

# Flow
add_node(slide, "INITIAL\nSTATE", 0.9, 3.4, 2.35, 1.0, BLUE, 17)
add_arrow(slide, 3.25, 3.9, 4.25, 3.9)
add_node(slide, "ACTIONS", 4.3, 3.4, 2.35, 1.0, PURPLE, 17)
add_arrow(slide, 6.65, 3.9, 7.65, 3.9)
add_node(slide, "NEW\nSTATES", 7.7, 3.4, 2.35, 1.0, GREEN, 17)
add_arrow(slide, 10.05, 3.9, 11.05, 3.9)
add_node(slide, "GOAL\nSTATE", 11.1, 3.4, 1.4, 1.0, ORANGE, 15)

add_text(slide, "Example: Home → Bus Stop → College",
         2.4, 5.15, 8.5, 0.55, size=21, color=CYAN,
         bold=True, align=PP_ALIGN.CENTER)

add_footer(slide, 2)

add_notes(slide,
"""Explain:
Planning answers the question: What should the AI do to reach its goal?

There are four important ideas:
initial state, actions, resulting states, and the goal.

Use the example of going from home to college.""")


# ============================================================
# SLIDE 3 — COMPONENTS OF A PLANNING PROBLEM
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Components of a Planning Problem")

cards = [
    ("Initial State", "Where the agent starts.", BLUE),
    ("Goal State", "What the agent wants to achieve.", GREEN),
    ("Actions", "Operations the agent can perform.", PURPLE),
    ("Preconditions", "What must be true before an action.", ORANGE),
    ("Effects", "What changes after the action.", CYAN),
]

positions = [
    (0.75, 1.9), (4.55, 1.9), (8.35, 1.9),
    (2.65, 4.45), (6.45, 4.45)
]

for (title, body, color), (x, y) in zip(cards, positions):
    add_card(slide, x, y, 3.25, 2.0, title, body, color)

add_footer(slide, 3)

add_notes(slide,
"""Explain each component with one example.

For example, for taking a bus:
Precondition: you are at the bus stop.
Action: take the bus.
Effect: you arrive at the destination.

This shows that AI cannot perform actions randomly. It must consider
conditions and consequences.""")


# ============================================================
# SLIDE 4 — STATE-SPACE PLANNING
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Planning with State-Space Search",
          "Search through possible states to find a valid plan")

# State diagram
add_node(slide, "HOME", 0.8, 3.0, 1.7, 0.75, BLUE)
add_node(slide, "BUS\nSTOP", 3.25, 2.0, 1.7, 0.75, PURPLE)
add_node(slide, "COLLEGE", 6.0, 3.0, 1.9, 0.75, GREEN)

add_node(slide, "SHOP", 3.25, 4.2, 1.7, 0.75, CARD2, 15)
add_node(slide, "PARK", 6.0, 5.05, 1.9, 0.75, CARD2, 15)

add_arrow(slide, 2.5, 3.3, 3.25, 2.55)
add_arrow(slide, 4.95, 2.55, 6.0, 3.3)
add_arrow(slide, 2.5, 3.35, 3.25, 4.45)
add_arrow(slide, 4.95, 4.55, 6.0, 5.05)

add_text(slide, "The AI searches possible paths and selects one that reaches the goal.",
         8.4, 2.45, 4.0, 1.3, size=20, color=WHITE, bold=True)

add_text(slide, "Goal: Find a suitable path from the initial state to the goal.",
         8.4, 4.25, 4.0, 1.2, size=17, color=MUTED)

add_footer(slide, 4)

add_notes(slide,
"""State-space planning represents the world using states.
The planner searches through possible states.

For example, from home there may be several choices:
bus stop, shop, park, etc.

The planner searches these possibilities until it finds a path
that reaches the desired goal.""")


# ============================================================
# SLIDE 5 — PARTIAL ORDER PLANNING
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Partial-Order Planning",
          "Fix only the order that is actually necessary")

add_text(slide, "Example: Making Tea", 0.8, 1.9, 4.0, 0.55,
         size=24, bold=True, color=CYAN)

# Left side actions
add_node(slide, "Boil Water", 0.9, 3.0, 2.1, 0.75, BLUE)
add_node(slide, "Put Tea\nin Cup", 0.9, 4.25, 2.1, 0.75, PURPLE)
add_node(slide, "Add Sugar", 4.0, 4.25, 2.1, 0.75, ORANGE)
add_node(slide, "Add Hot Water", 7.1, 3.0, 2.1, 0.75, GREEN)

add_arrow(slide, 3.0, 3.38, 7.1, 3.38)
add_arrow(slide, 3.0, 4.62, 7.1, 3.62)
add_arrow(slide, 6.1, 4.62, 7.1, 3.62)

add_text(slide,
         "Some actions have a required order.\n"
         "Other actions can happen independently.",
         9.65, 2.8, 2.9, 1.7, size=18, color=WHITE,
         bold=True)

add_text(slide,
         "Benefit: flexibility",
         9.65, 5.05, 2.9, 0.55, size=20, color=CYAN,
         bold=True)

add_footer(slide, 5)

add_notes(slide,
"""Partial-order planning is different from a rigid sequence.

The planner specifies only the ordering constraints that matter.
For example, hot water must be ready before adding it, but some
other preparation steps can happen independently.

The main benefit is flexibility.""")


# ============================================================
# SLIDE 6 — PLANNING GRAPHS
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Planning Graphs",
          "A layered representation of states and possible actions")

# Layers
labels = [
    ("STATE", BLUE),
    ("ACTIONS", PURPLE),
    ("STATE", GREEN),
    ("ACTIONS", PURPLE),
    ("GOAL", ORANGE)
]

x_positions = [0.7, 3.0, 5.3, 7.6, 10.0]

for (label, color), x in zip(labels, x_positions):
    add_node(slide, label, x, 2.7, 1.7, 0.75, color, 15)

for i in range(len(x_positions) - 1):
    add_arrow(slide,
              x_positions[i] + 1.7,
              3.075,
              x_positions[i + 1],
              3.075)

add_card(slide, 1.2, 4.45, 3.2, 1.65,
         "Why use it?",
         "Helps represent possible actions and states and can make planning search more efficient.",
         BLUE, 18, 13)

add_card(slide, 5.05, 4.45, 3.2, 1.65,
         "What it shows",
         "Which actions are possible and how they can lead toward a goal.",
         PURPLE, 18, 13)

add_card(slide, 8.9, 4.45, 3.2, 1.65,
         "Key idea",
         "Planning becomes a structured graph instead of an unorganized search.",
         GREEN, 18, 13)

add_footer(slide, 6)

add_notes(slide,
"""A planning graph is a layered structure.
It alternates between states and actions.

The planner can use this representation to reason about which
actions are possible and which combinations can lead to the goal.""")


# ============================================================
# SLIDE 7 — PROPOSITIONAL LOGIC
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Planning with Propositional Logic",
          "Use facts and logical rules to reason about actions")

add_card(slide, 0.8, 2.0, 3.2, 3.8,
         "FACTS",
         "AtHome = TRUE\n\nHasCar = TRUE\n\nAtCollege = FALSE",
         BLUE, 20, 18)

add_card(slide, 4.95, 2.0, 3.2, 3.8,
         "RULE",
         "IF\nAtHome AND HasCar\n\nTHEN\nDriveToCollege",
         PURPLE, 20, 18)

add_card(slide, 9.1, 2.0, 3.2, 3.8,
         "RESULT",
         "AtCollege = TRUE\n\nThe action changes the state.",
         GREEN, 20, 18)

add_arrow(slide, 4.0, 3.9, 4.9, 3.9)
add_arrow(slide, 8.15, 3.9, 9.05, 3.9)

add_text(slide,
         "Logic allows the planner to reason about what is possible.",
         2.2, 6.25, 8.9, 0.45, size=19,
         color=CYAN, bold=True, align=PP_ALIGN.CENTER)

add_footer(slide, 7)

add_notes(slide,
"""Propositional logic represents facts as statements that can be
true or false.

The planner can use rules to decide whether an action is applicable.

For example, if the agent is at home and has a car, then it can
drive to college.""")


# ============================================================
# SLIDE 8 — ANALYSIS OF PLANNING APPROACHES
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Analysis of Planning Approaches",
          "Different methods work better for different problems")

headers = ["Approach", "Strength", "Limitation"]

rows = [
    ("State-Space", "Simple and general", "Can search many states"),
    ("Partial-Order", "Flexible ordering", "More complex relationships"),
    ("Planning Graphs", "Structured search", "Graph can become large"),
    ("Logic-Based", "Strong reasoning", "Depends on good representation"),
    ("Hierarchical", "Handles complex tasks", "Requires task hierarchy"),
]

# Table-like layout
x0 = 0.65
y0 = 2.0
widths = [3.0, 4.1, 4.5]
height = 0.68

for i, (head, width) in enumerate(zip(headers, widths)):
    add_node(slide, head, x0 + sum(widths[:i]), y0,
             width - 0.08, height, [BLUE, PURPLE, GREEN][i], 15)

for r, row in enumerate(rows):
    y = y0 + 0.82 + r * 0.78
    for c, value in enumerate(row):
        shape = slide.shapes.add_shape(
            MSO_SHAPE.ROUNDED_RECTANGLE,
            Inches(x0 + sum(widths[:c])),
            Inches(y),
            Inches(widths[c] - 0.08),
            Inches(0.66)
        )
        shape.fill.solid()
        shape.fill.fore_color.rgb = CARD
        shape.line.color.rgb = RGBColor(35, 55, 85)
        add_text(slide, value,
                 x0 + sum(widths[:c]) + 0.12,
                 y + 0.02,
                 widths[c] - 0.3,
                 0.58,
                 size=13, color=WHITE if c == 0 else MUTED,
                 bold=(c == 0))

add_footer(slide, 8)

add_notes(slide,
"""This slide compares the major planning approaches.

There is no single best method for every problem.
State-space search is straightforward but may explore many states.
Partial-order planning adds flexibility.
Planning graphs organize the search.
Logic gives strong reasoning capabilities.
Hierarchical planning is useful for complex tasks.""")


# ============================================================
# SLIDE 9 — HIERARCHICAL PLANNING
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Hierarchical Planning",
          "Break a complex goal into smaller tasks")

# Tree
add_node(slide, "DELIVER\nPACKAGE", 5.25, 1.75, 2.7, 0.8, BLUE, 18)

# Branches
add_node(slide, "PICK UP", 1.1, 3.45, 2.2, 0.75, PURPLE, 16)
add_node(slide, "PLAN ROUTE", 4.0, 3.45, 2.2, 0.75, PURPLE, 16)
add_node(slide, "TRAVEL", 6.9, 3.45, 2.2, 0.75, PURPLE, 16)
add_node(slide, "DELIVER", 9.8, 3.45, 2.2, 0.75, PURPLE, 16)

for x in [2.2, 5.1, 8.0, 10.9]:
    add_arrow(slide, 6.6, 2.55, x, 3.45)

add_text(slide, "Each high-level task can be decomposed into smaller actions.",
         2.0, 5.05, 9.2, 0.55,
         size=21, color=CYAN, bold=True, align=PP_ALIGN.CENTER)

add_text(slide, "Big Goal → Subtasks → Specific Actions",
         2.2, 5.8, 8.8, 0.45,
         size=18, color=MUTED, align=PP_ALIGN.CENTER)

add_footer(slide, 9)

add_notes(slide,
"""Hierarchical planning is useful when a problem is too complex to
solve as one giant sequence.

The planner first creates a high-level plan and then decomposes it
into smaller subtasks.

For example, delivering a package can be divided into picking it up,
planning a route, travelling, and delivering it.""")


# ============================================================
# SLIDE 10 — CONDITIONAL & CONTINGENCY PLANNING
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Conditional & Contingency Planning",
          "Planning for different conditions and unexpected events")

# Decision diamond
diamond = slide.shapes.add_shape(
    MSO_SHAPE.DIAMOND,
    Inches(5.1), Inches(2.0), Inches(2.7), Inches(1.35)
)
diamond.fill.solid()
diamond.fill.fore_color.rgb = PURPLE
diamond.line.color.rgb = PURPLE

add_text(slide, "Is it\nraining?", 5.1, 2.22, 2.7, 0.85,
         size=19, bold=True, align=PP_ALIGN.CENTER)

add_node(slide, "YES\nTake Umbrella", 1.4, 4.3, 2.6, 0.9, BLUE, 16)
add_node(slide, "NO\nGo Without", 9.2, 4.3, 2.6, 0.9, GREEN, 16)

add_arrow(slide, 5.3, 3.35, 3.95, 4.3)
add_arrow(slide, 7.6, 3.35, 9.2, 4.3)

add_text(slide, "Conditional planning",
         1.4, 5.55, 3.0, 0.4, size=17, color=CYAN, bold=True,
         align=PP_ALIGN.CENTER)

add_text(slide, "Contingency planning",
         8.95, 5.55, 3.0, 0.4, size=17, color=CYAN, bold=True,
         align=PP_ALIGN.CENTER)

add_text(slide,
         "Example contingency: If the bus is unavailable → take a taxi.",
         2.2, 6.35, 8.9, 0.45, size=16, color=MUTED,
         align=PP_ALIGN.CENTER)

add_footer(slide, 10)

add_notes(slide,
"""Real environments are uncertain.

Conditional planning creates different actions depending on conditions.
For example, if it rains, take an umbrella; otherwise don't.

Contingency planning goes further by preparing alternative plans
for unexpected failures, such as a bus being unavailable.""")


# ============================================================
# SLIDE 11 — MULTI-AGENT PLANNING
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Multi-Agent Planning",
          "Multiple intelligent agents coordinate to achieve goals")

add_node(slide, "COORDINATOR", 5.15, 1.65, 2.8, 0.8, BLUE, 17)

add_node(slide, "ROBOT A\nPick Package 1", 1.0, 3.5, 2.7, 1.0, PURPLE, 15)
add_node(slide, "ROBOT B\nPick Package 2", 5.0, 3.5, 2.7, 1.0, PURPLE, 15)
add_node(slide, "ROBOT C\nDeliver", 9.0, 3.5, 2.7, 1.0, PURPLE, 15)

for x in [2.35, 6.35, 10.35]:
    add_arrow(slide, 6.55, 2.45, x, 3.5)

add_card(slide, 1.1, 5.35, 3.2, 1.1,
         "Coordination", "Agents must avoid conflicting actions.",
         BLUE, 16, 12)

add_card(slide, 5.05, 5.35, 3.2, 1.1,
         "Communication", "Agents may need to share information.",
         CYAN, 16, 12)

add_card(slide, 9.0, 5.35, 3.2, 1.1,
         "Task Sharing", "Different agents can handle different tasks.",
         GREEN, 16, 12)

add_footer(slide, 11)

add_notes(slide,
"""Multi-agent planning deals with situations where several agents
must coordinate.

A warehouse is a good example. Multiple robots may pick up and
deliver packages at the same time.

The challenge is to divide tasks, communicate, and avoid conflicts.""")


# ============================================================
# SLIDE 12 — REAL-WORLD APPLICATIONS
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, "Real-World Applications of AI Planning")

applications = [
    ("🤖", "Robotics", "Task and movement planning", BLUE),
    ("🚗", "Autonomous Vehicles", "Route and obstacle planning", CYAN),
    ("📦", "Logistics", "Delivery and scheduling", ORANGE),
    ("🎮", "Games", "Character decision making", PURPLE),
    ("🚀", "Space", "Mission and exploration planning", GREEN),
    ("🏭", "Manufacturing", "Production and resource planning", RED),
]

positions = [
    (0.7, 1.9), (4.55, 1.9), (8.4, 1.9),
    (0.7, 4.35), (4.55, 4.35), (8.4, 4.35)
]

for (icon, title, body, color), (x, y) in zip(applications, positions):
    shape = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE,
        Inches(x), Inches(y), Inches(3.45), Inches(1.9)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = CARD
    shape.line.color.rgb = RGBColor(35, 55, 85)

    add_text(slide, icon, x + 0.2, y + 0.2, 0.55, 0.5,
             size=22, align=PP_ALIGN.CENTER)
    add_text(slide, title, x + 0.85, y + 0.22, 2.25, 0.4,
             size=18, bold=True, color=WHITE)
    add_text(slide, body, x + 0.25, y + 0.9, 2.9, 0.7,
             size=13, color=MUTED)

add_footer(slide, 12)

add_notes(slide,
"""Planning is not just a textbook idea.

It appears in robotics, autonomous vehicles, logistics, games,
space missions, and manufacturing.

The common pattern is always similar:
there is a goal, possible actions, constraints, and a need to
select a useful sequence of actions.""")


# ============================================================
# SLIDE 13 — MODERN AI AGENTS + CONCLUSION
# ============================================================

slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)

add_title(slide, "Planning in Modern AI",
          "Classical planning → AI agents that reason and act")

# Modern agent flow
steps = [
    ("GOAL", BLUE),
    ("REASON", PURPLE),
    ("PLAN", CYAN),
    ("USE TOOLS", ORANGE),
    ("ACT", GREEN),
    ("OBSERVE", RED),
    ("RE-PLAN", PURPLE),
]

x = 0.45
for i, (label, color) in enumerate(steps):
    add_node(slide, label, x, 1.95, 1.45, 0.68, color, 12)
    if i < len(steps) - 1:
        add_arrow(slide, x + 1.45, 2.29, x + 1.78, 2.29, CYAN, 1.8)
    x += 1.78

add_text(slide,
         "Traditional planning asks: “What sequence of actions reaches the goal?”",
         1.1, 3.25, 11.1, 0.5, size=17, color=MUTED,
         align=PP_ALIGN.CENTER)

add_text(slide,
         "Modern AI agents extend this idea by planning, acting, observing results, and adapting.",
         1.0, 3.85, 11.3, 0.6, size=20, color=WHITE,
         bold=True, align=PP_ALIGN.CENTER)

# Conclusion box
box = slide.shapes.add_shape(
    MSO_SHAPE.ROUNDED_RECTANGLE,
    Inches(2.0), Inches(4.85), Inches(9.3), Inches(1.35)
)
box.fill.solid()
box.fill.fore_color.rgb = CARD
box.line.color.rgb = CYAN

add_text(slide,
         "“Planning gives AI the ability not just to know what it wants, "
         "but to decide how to achieve it.”",
         2.25, 5.08, 8.8, 0.85,
         size=21, color=CYAN, bold=True,
         align=PP_ALIGN.CENTER)

add_text(slide,
         "THANK YOU",
         5.1, 6.55, 3.1, 0.45,
         size=22, color=WHITE, bold=True,
         align=PP_ALIGN.CENTER)

add_footer(slide, 13)

add_notes(slide,
"""Conclusion:
AI planning starts with a goal and determines actions to reach it.

We studied state-space planning, partial-order planning,
planning graphs, propositional logic, hierarchical planning,
conditional and contingency planning, and multi-agent planning.

A useful modern connection is AI agents. Modern agents can plan,
use tools, act, observe results, and revise their plans.

Final line:
Planning gives AI the ability not just to know what it wants,
but to decide how to achieve it.""")


# ============================================================
# SAVE
# ============================================================

filename = "Planning_in_Artificial_Intelligence.pptx"
prs.save(filename)

print(f"Presentation created successfully: {filename}")
