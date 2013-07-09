---
layout: post
title: State-Space Analysis of Time-Varying Networks
figures: ['journal.pcbi.1002385.g002.png', 'journal.pcbi.1002385.g004.png',
'journal.pcbi.1002385.g003.png']
published: true
--- 


[State-Space Analysis of Time-VArying Higher-Order Spike Correlation for
Multiple Neural Spike Train
Data](http://www.ploscompbiol.org/article/info%3Adoi%2F10.1371%2Fjournal.pcbi.1002385)

# Motivation 

This method is awesome. It does a couple really cool things. First, it places
findings in an information geometric context. Second, it let's us do away with
the stationarity assumption for time. Third, it lets us use higher-order
correlations to find larger cell assemblies. 

The time-varying part is the most exciting. 

# General Formulation

Log-linear model kind of like the Ising. We write the log of the probability
in terms of a polynomial over 0-1 binned spike values like so: 

$$ \log p(\vec{x}) = \sum_i \theta_i x_i + \sum_{i&lt;j} \theta_{ij} x_i x_j + \cdots + \theta_{1 \cdots N}x_1 \cdots x_N - \psi (\vec{\theta}) $$

\\( \psi \\) is a normalization parameter, a function of \\( \theta \\). This
provides a representaiton in "theta coordinates". 

There's another representation, called \\(\eta\\)-coordinates. 

For baseline firing probabilities, we write: 
$$ 
\eta_i = E\[X_i\] \quad i = 1, \ldots , N
$$

For second-order effects, we write: 
$$
\eta_{ij} = E\[X_{ij}\] \quad i &lt; j 
$$
For the highest order, we write: 
$$
\eta_{1\cdots N} = E\[X_1 \cdots X_N\]
$$

It's useful to simplify notation using multi-indices. We say that \\(\Omega_k
\\) is set of all \\(k\\)-element subsets of \\( \\{ 1, \cdots , N \\} \\).
Then, we can write

$$ f_i (\vec{x}) = x_i $$
$$ f_{ij}(\vec{x}) = x_i x_j $$

And so on. Then we can compactly write the \\(\theta)\\) and \\(\eta\\)
coordinates as 
$$ \log p ( \vec{x} ) = \sum_I f_I (\vec{x}) - \psi (\vec{\theta} ) $$
and
$$ \eta_I = E\[ f_I ( \vec{X} ) ] $$
for \\( I \in \\{ \Omega_1, \cdots, \Omega_N \\} \\).

In order to get the \\(\theta\\)'s, we can consider a sequences of nested
models, \\(E_r\\) in which all terms above the \\(r\\)th order are set to 0.
When we move from one order to the next, we see if adding a higher-order
parameter increases the expectations \\(\eta\\) more than the chance observed
from the lower-order correlations alone. 

## Time-varying coordination

We want to extend the log-linear model to a time-dependent formulation. So we
have \\( \vec{\theta_t} \\) where the \\( \theta \\)'s are related through
some yet-to-be-described smoothness condition. 

$$ p( \vec{x} | \vec{\theta} ) = \exp \Big( \sum_I \theta^t_I f_I(\vec{x}) - \psi (
\vec{\theta_t} ) \Big) $$

for our multi-indices \\(I\\). 

## Likelihood of time-varying coordination

Of course we need to fit this to observed data. A first step is to write the
likelihood of an observed sequence given the parameters \\(\theta\\). 

For \\(n\\) trials we estimate the coincidence rate as 

$$ y_I^t = \frac{1}{n} \sum_{l=1}^n f_I (\vec{X}^{t,l}) $$

for each \\(I\\).

Now the likelihood of the observed "words" over time and trials can be written
as

$$ p(\vec{y}_{1:T}| \\ \vec{\theta}_{1:T}) = \prod_{l=1}^n \prod_{t=1}^T \exp \big( \sum_I \theta_I^t
f_I( \vec{X}^{t,l} ) - \psi(\vec{\theta_t}) \big) $$

Substituting \\( ny_I^t \\) for \\( f_I\\) and rewriting the summation as a
dot product, we get

$$ p(\vec{y}_{1:T} | \\ \vec{\theta}_{1:T}) = \prod_{t=1}^T \exp \big( n ( \vec{y}_t' \vec{\theta}_t -
\psi(\vec{\theta}_t)) \big) $$

We assumed that the spike patterns are conditionally independent, give the
chosen \\( \theta \\) terms. So all of the time dependencies are encoded via
the \\(\theta \\) parameters. 

To do that, we write a nifty state equation: 

$$ \vec{\theta}_t = F\vec{\theta}_{t-1} + \xi_t $$

The matrix \\(F\\) gives us first order autogregressive parameters linking one
state to the next, and the last term is a random vector drawn from a zero-mean
multivariate normal distro with covariance \\(Q\\). The initial \\(\theta\\)'s
are also multivariate normal with \\(\vec{\theta}_1 \sim \mathcal{ N } (
\vec{\mu}, \Sigma ) \\), not necessarily zero-mean. 

We'll collect all these hyperparameters into a set and call it \\(\vec{w} =
\\\{F, Q, \vec{\mu}, \Sigma\\} \\). 

Given the likelihood and prior distribution, we're interested in getting the
posterior density

$$
p( \vec{\theta}_{1:T} \vert \\ \vec{y}_{1:T}, \vec{w} ) = \frac{ p(
\vec{y}_{1:T} \vert \\ \vec{\theta}_{1:T} ) p(
\vec{\theta}_{1:T} ) \vert \\ \vec{w} ) } { p( \vec{y}_{1:T} \vert \\ \vec{w} ) } 
$$




