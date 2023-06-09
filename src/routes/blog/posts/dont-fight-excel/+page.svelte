<h1 class="text-4xl mb-2 text-amber-600 font-extrabold font-serif">
	Don't Fight Excel - You Won't Win
</h1>
<h2 class="text-xl text-slate-700 font-semibold mb-2">
	Notes on building software for spreadsheet-dominated domains
</h2>
<div class="leading-7 text-slate-700 font-extralight text-lg">
	<p class="mb-2 ">
		Microsoft Excel is arguably the most influential piece of business software ever written. At
		nearly 40 years old, Excel plays a crucial role in every industry. It is globally recognizable,
		extensible, shareable, and performant; yet, many software engineers would accuse you of being a
		Luddite for not switching to a SaaS solution for your business.
	</p>
	<p class="mb-4">
		There are reasons legacy industries like Insurance prefer the simple spreadsheet - and if you
		don’t account for them your product will be doomed from the get-go. At Shepherd, we’ve been
		building internal software for underwriting insurance products for almost two years and have
		learned plenty of lessons from Excel. Instead of fighting Excel, we’ve borrowed many of the
		powerful features our users love and integrated them into our platform. By making our platform
		explainable and extensible, and keeping the UI familiar, we’ve built an internal product our
		Underwriters are happy to use every day.
	</p>
	<h2 class="text-xl text-slate-700 font-semibold mb-2">Lesson 1 - Explainability</h2>
	<p class="mb-2">
		Spreadsheets are inherently explainable. Formulas that drive calculations are visible, which
		allows the user to poke and prod the spreadsheet with an almost instant response. Building
		intuition for the expected behavior of your system is a key step in your user's journey to
		trusting it. Humans hate reading documentation, they like to click around and see what happens.
	</p>
	<p class="mb-2">
		At Shepherd, we faced this problem when migrating actuarial models from spreadsheets into our
		platform. Traditionally for an Underwriter to price a deal they would enter their inputs into a
		spreadsheet with an actuarial model. Our platform hid those models in our backend and exposed
		forms as inputs. Though we could now validate inputs and test our models much more rigorously
		than we could have in Excel, the raw iteration time from an input change to pricing had
		increased. The added delay to this feedback loop made it harder for our Underwriting team to
		reason with the pricing logic.
	</p>
	<p class="mb-4">
		To combat this, we started by prioritizing “time to pricing” as a key metric – measuring
		precisely how long it takes an underwriter to go from initial submission to initial output of
		premium to charge. Then we exposed the intermediate state of the pricing model to our
		Underwriters, allowing them to gain more insight from each input change. Speeding up this
		feedback loop led to massive increases in trust in the platform.
	</p>
	<h2 class="text-xl text-slate-700 font-semibold mb-2">Lesson 2 - User Interface</h2>
	<p class="mb-2">
		Excel is just awesome when it comes to interacting with tabular data. Filtering, sorting, and
		pivoting are built in. Data visualization is easy — every chart imaginable is ready to go with a
		couple of clicks. If your users are migrating to your product from Excel, a simple HTML table
		won’t cut it. But trying to replicate all of the UI of Excel could take years. Paying for a
		feature-rich data grid solution is a worthwhile investment you can make early on. Products, such
		as Ag Grid and Handsontable, are excellent examples. Your engineers should focus on building
		your core product, not a performant data grid that struggles to get to parity with Excel.
	</p>
	<p class="mb-4">
		At Shepherd, we saw huge productivity gains from our underwriters when we moved to a data grid
		vendor. Regaining just a subset of Excel's UI functionality in our platform reduced the time of
		a common auto-exposure workflow by 33 percent.
	</p>
	<h2 class="text-xl text-slate-700 font-semibold mb-2">Lesson 3 - Extensibility</h2>
	<p class="mb-2">
		Although a first-year analyst can rewrite an Excel workbook in one night - it is much harder to
		rebuild a software platform. Excel sticks around because it's easy to change. You can make a
		copy and completely rework your model for a single deal. When translating a business process
		from Excel to code be careful not to dig yourself into a rabbit hole of overly explicit schema
		and tightly coupled code. Double-check your user interviews - are you only building the most
		common use case? If your users have been using Excel for this process for the last 20 years,
		there are probably many outlier cases where the flexibility of Excel allows for easy one-off
		analysis. Your platform should be flexible enough so that it's not blindsided by a new
		requirement.
	</p>
	<p class="mb-4">
		At Shepherd, we started by building the 80th percentile of use cases and expanded outward from
		there. We don’t overfit our code to the first set of requirements and we build in levers to let
		our users tweak the system. When interfacing with our pricing models, for example, our
		Underwriters can override some of the derived input pricing fields to quickly adapt to an edge
		case submission. The Underwriters know their common workflows and they can deviate from the
		happy path without needing to leave the Shepherd platform
	</p>
	<h2 class="text-xl text-slate-700 font-semibold mb-2">Final Thoughts</h2>
	<p>
		Your relationship with Excel should be symbiotic, not competitive. Done correctly, Excel can be
		a massive asset to how you think about your SaaS solution. Spreadsheets are familiar to your
		users and copying their best features will lead to large productivity gains. Don’t make the
		mistake of building too much rigidity into your system, be adaptable - just like Excel. Finally,
		let your users know what's happening inside your platform. If your platform can’t do these
		things, there's a reason your users would rather stick to a spreadsheet. Don’t fight Excel: it’s
		a losing game.
	</p>
</div>
