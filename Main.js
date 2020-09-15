<script>

///////////// Função teste //////////////

DIM = 10                                                     // number of dimensions
f = sphere                                                 // name of the test function 
RANGE = [-47.5 , 47.5]                                       // search domain

//////////// Parâmetros PSO /////////////

NPART = 20                                                   // number of particles
MAXITER = 5000                                               // max number of iterations
STOPC = 0.0000000001                                         // stop criterion
k = 1
CMAX = 3                                                     //consecutive evaluations
DT = [0.1 , 0.25 ]                                           //dlow and dhigh 
dir = 1                                                      //attraction as default

IWMIN = 0.4 
IWMAX = 0.7
var params = {
     'IW': IWMAX,        
     'CC': 0,  
     'SC': 4,       
     'GC': 0.1        
  }
L = math.norm(math.multiply(math.ones(DIM), (RANGE[1] - RANGE[0])))               // diagonal length of the space
VMAX = k * (RANGE[1] - RANGE[0]) / 2                                              // maximum velocity

iw = [] 
for(i = 0; i< MAXITER; i++){
    iw[i] = IWMAX - (i+1) * (IWMAX - IWMIN) / MAXITER 
}                                                                                 // inertia weight through iterations


///////////////Main iteration/////////////////

p = init(NPART, DIM, RANGE, VMAX, f)
G = getBestGlobal(p);
c = 0

for (i = 0; i < MAXITER; i++){
     
    for (j = 0; j < NPART; j++){
        
        for (k = 0; k < DIM; k++){
            p.G[k] = getGradient(p.X[j][k], f)
        }
        for (k = 0; k < DIM; k++){
            p.G[k] = truncGrad(p.G[j][k], VMAX)  // trunc gradient
        }
        
        
        for (k = 0; k < DIM; k++){
            p.V[k] = getVelocity(p.X[j][k], p.V[j][k], p.P[j][k], p.G[j][k], G, p.I[j], params, dir, DIM)
        }
        for (k = 0; k < DIM; k++){
            p.V[k] = truncVel(p.V[j][k], VMAX) // trunc velocity
        }
        
        
        for (k = 0; k < DIM; k++){
            p.X[k] = p.X[j][k] + p.V[j][k]
        }
        for (k = 0; k < DIM; k++){
            p.G[k] = truncGrad(p.G[j][k], VMAX)  // trunc gradient
        }
        /*
        p.G(j, :) = getGradient(p.X(j, :), f);  
        p.G(j, :) = truncGrad(p.G(j, :), VMAX); // trunc gradient
        
        p.V(j, :) = getVelocity(p.X(j, :), p.V(j, :), p.P(j, :), p.G(j, :), G, p.I(j), params, dir, DIM);
        p.V(j, :) = truncVel(p.V(j, :), VMAX); // trunc velocity
        
        p.X(j, :) = p.X(j, :) + p.V(j, :);
        [p.X(j, :), p.I(j), p.C(i)] = truncSpace(p.X(j, :), p.I(j), p.C(j), RANGE); // trunc space
        
        p.XFIT(j) = f(p.X(j, :));
        [p.P(j, :), p.PFIT(j), G] = updateBest(p.X(j, :), p.XFIT(j), p.P(j, :), p.PFIT(j), G);  
        */
    }
    
    // particle choice
    [p.I, p.C] = updateImportance(p.X, p.I, p.XFIT, p.OLDXFIT, p.C, p.G, G.X, CMAX, NPART);
    
    // swarm choice
    diversity = getDiversity(p.X, L, NPART);
    [dir, p.I] = updateDir(dir, diversity, p.I, DT, NPART);    
    
    // update of variables
    p.OLDXFIT = p.XFIT;
    params.IW = iw(i);
    
    // console output
    msg = ['ITER: ' num2str(i) ' | G: ' num2str(G.XFIT) ' | dir: ' num2str(dir) ' | Div: ' num2str(diversity)];
    fprintf(repmat('\b', 1, c));
    fprintf(msg);
    c = numel(msg);

    // stop criterion
    if(G.XFIT < STOPC), break, end
}
/*
clear, clc, close

%% Parameter settings

%%%%%%%%%%%%% Test function %%%%%%%%%%%%%
DIM = 10; % number of dimensions
FNAME = 'sphere'; % name of the test function ('name'.m)
RANGE = [-47.5, 47.5]; % search domain
f = str2func(FNAME); % handle

%%%%%%%%%%%%% PSO parameters %%%%%%%%%%%%%
NPART = 20; % number of particles
MAXITER = 5000; % max number of iterations
STOPC = 1e-10; % stop criterion
k = 1; 
CMAX = 3; % consecutive evaluations
DT = [1e-1 .25]; % dlow and dhigh
dir = 1; % attraction as default

IWMIN = .4; IWMAX = .7;
params = struct('IW', IWMAX, 'CC', 0, 'SC', 4, 'GC', 1e-1);
L = norm(ones(1, DIM) * (RANGE(2) - RANGE(1))); % diagonal length of the space
VMAX = k * (RANGE(2) - RANGE(1)) / 2; % maximum velocity
iw = IWMAX - (1 : MAXITER) * (IWMAX - IWMIN) / MAXITER; % inertia weight through iterations


%% Main iteration
p = init(NPART, DIM, RANGE, VMAX, f);
G = getBestGlobal(p);

c = 0;
for i = 1 : MAXITER
     
    for j = 1 : NPART
        
        p.G(j, :) = getGradient(p.X(j, :), f);
        p.G(j, :) = truncGrad(p.G(j, :), VMAX); % trunc gradient
        
        p.V(j, :) = getVelocity(p.X(j, :), p.V(j, :), p.P(j, :), p.G(j, :), G, p.I(j), params, dir, DIM);
        p.V(j, :) = truncVel(p.V(j, :), VMAX); % trunc velocity
        
        p.X(j, :) = p.X(j, :) + p.V(j, :);
        [p.X(j, :), p.I(j), p.C(i)] = truncSpace(p.X(j, :), p.I(j), p.C(j), RANGE); % trunc space
        
        p.XFIT(j) = f(p.X(j, :));
        [p.P(j, :), p.PFIT(j), G] = updateBest(p.X(j, :), p.XFIT(j), p.P(j, :), p.PFIT(j), G);        
    end
  
    % particle choice
    [p.I, p.C] = updateImportance(p.X, p.I, p.XFIT, p.OLDXFIT, p.C, p.G, G.X, CMAX, NPART);
    
    % swarm choice
    diversity = getDiversity(p.X, L, NPART);
    [dir, p.I] = updateDir(dir, diversity, p.I, DT, NPART);    
    
    % update of variables
    p.OLDXFIT = p.XFIT;
    params.IW = iw(i);
    
    % console output
    msg = ['ITER: ' num2str(i) ' | G: ' num2str(G.XFIT) ' | dir: ' num2str(dir) ' | Div: ' num2str(diversity)];
    fprintf(repmat('\b', 1, c));
    fprintf(msg);
    c = numel(msg);

    % stop criterion
    if(G.XFIT < STOPC), break, end
end
fprintf(repmat('\b', 1, c));
%% Results
disp(['Iteration: ' num2str(i)])
disp('Solution found')
disp(['X: [' num2str(G.X) ']'])
disp(['Y: [' num2str(G.XFIT) ']'])
*/
</script>
