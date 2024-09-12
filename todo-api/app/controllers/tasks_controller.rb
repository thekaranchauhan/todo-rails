class TasksController < ApplicationController
  # Set the @task instance variable for the actions that need it
  before_action :set_task, only: [:show, :update, :destroy]

  # GET /tasks
  # Fetch and return all tasks in JSON format
  def index
    @tasks = Task.all
    render json: @tasks
  end

  # POST /tasks
  # Create a new task with the provided parameters and return the task in JSON format
  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # GET /tasks/:id
  # Fetch and return a specific task by ID in JSON format
  def show
    render json: @task
  end

  # PATCH/PUT /tasks/:id
  # Update an existing task with the provided parameters and return the updated task in JSON format
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/:id
  # Delete a specific task by ID and return no content
  def destroy
    @task.destroy
    head :no_content
  end

  private

  # Set the @task instance variable by finding the task with the given ID
  def set_task
    @task = Task.find(params[:id])
  end

  # Permit only the allowed parameters for task creation and update
  def task_params
    params.require(:task).permit(:title, :completed)
  end
end
